import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../Router/Auth";
import DisplayStructure from "../ComponentsTSX/Display";
import { MooviesContainer } from "../ComponentsStyle/FlexContainer.styles";
import { MovieBox } from "../ComponentsTSX/MoovieCards";
import { Empty } from "./Empty";
import { Espacing } from "../ComponentsStyle/Container.styles";
import Spinner from "../ComponentsStyle/Loading.styles";
import ClickableSearchInput from "../ComponentsStyle/SearchInput.styles";

interface Movie {
  id: string;
  title: string;
  quantity?: number;
  price?: number;
  subtotal?: number;
}

interface CartItem extends Movie {
  quantity: number;
}

export const HomeScreen = () => {
  const { cart, setCart, data, loading, error } = useContext<any>(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cartCount, setCartCount] = useState<{ [key: string]: number }>({});
  const [clickedButton, setClickedButton] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [searchInitiated, setSearchInitiated] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const DataMyCart = (location.state as any)?.home;

  useEffect(() => {
    if (DataMyCart) {
      location.state.carts.forEach((item: CartItem) => {
        setCartCount((prevCount: { [key: string]: number }) => ({
          ...prevCount,
          [item.id]: item.quantity
        }));
        setClickedButton((prevButtons: string[]) => [...prevButtons, item.id]);
      });
    }
    setSearchResults(data); // Carrega todos os dados na primeira renderização
    // eslint-disable-next-line
  }, [DataMyCart]);


  const handleSearch = () => {
    setVisible(true)
    setSearchResults([])
    setSearchInitiated(true);
    const results = data.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    navigate(`/?search-query=${searchTerm}`);
    setTimeout(() => {
      setSearchResults(results);
      setVisible(false)
    }, 500)
  };

  const handleAddToCart = (result: Movie) => {
    const existingItemIndex = cart.findIndex((item: CartItem) => item.id === result.id);
  
    setClickedButton((prevButtons: string[]) => [...prevButtons, result.id]);

    if (existingItemIndex !== -1) {
      setCart((prev: CartItem[]) =>
        prev.map((item: CartItem, index: number) => {
          if (index === existingItemIndex) {
            const newQuantity = item.quantity + 1;
            return { ...item, quantity: newQuantity, subtotal: item.price! * newQuantity };
          } else {
            return item;
          }
        })
      );
      setCartCount((prevCount: { [key: string]: number }) => ({
        ...prevCount,
        [result.id]: (prevCount[result.id] || 0) + 1
      }));
    } else {
      // Se o item não existir no carrinho
      const subtotal = result.price!;
      setCart((prev: CartItem[]) => [...prev, { ...result, quantity: 1, subtotal }]);
      setCartCount((prevCount: { [key: string]: number }) => ({
        ...prevCount,
        [result.id]: (prevCount[result.id] || 0) + 1
      }));
    }
  };
  

  const navigateToCart = () => {
    navigate('/cart', { state: { cart: cart || [] } });
  };

  const ResultsData = searchInitiated ? searchResults : data

  return (
    <DisplayStructure onClick={navigateToCart}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Empty />
      ) : (
        <>
          <ClickableSearchInput
            type="text"
            placeholder='Buscar filme pelo nome'
            onChange={(e: any) => setSearchTerm(e.target.value)}
            onClick={handleSearch}
          />
          <Espacing />
          <Spinner visible={visible} />
          <MooviesContainer>
            {ResultsData.map((movie: Movie) => (
              <MovieBox
                key={movie.id}
                movie={movie}
                handleAddToCart={handleAddToCart}
                cartCount={cartCount}
                clickedButton={clickedButton}
              />
            ))}
          </MooviesContainer>
        </>
      )}
    </DisplayStructure>
  );
};

export default HomeScreen;
