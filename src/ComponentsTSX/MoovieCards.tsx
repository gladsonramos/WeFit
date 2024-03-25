
import { Box, Espacing } from '../ComponentsStyle/Container.styles';
import { ButtonCart } from '../ComponentsStyle/Buttons.styles';
import { Title } from "../ComponentsStyle/Title.styles";
import { FlexContainer } from '../ComponentsStyle/FlexContainer.styles';
import { Image } from "../ComponentsStyle/Images.styles";

export const MovieBox = ({ movie, handleAddToCart, cartCount, clickedButton }: any) => {

    const CartShopping = require('../Assets/Cart.png');
    const isClicked = clickedButton.includes(movie.id);

    return (
        <Box key={movie.id}>
            <Image style={{ width: "147px", height: "187px" }} src={movie.image} alt={movie.image} />
            <Espacing espaccing={"8px"} />
            <Title color='#333333' fontSize='12px' >{movie.title}</Title>
            <Espacing espaccing={"8px"} />
            <Title color='#333333' fontSize='16px'>R$ {movie.price}</Title>
            <Espacing espaccing={"8px"} />
            <ButtonCart onClick={() => handleAddToCart(movie)} isClicked={isClicked}>
                <FlexContainer align={"center"}>
                    <Image src={CartShopping} />
                    <Title color='#FFFFFF' fontSize='12px' bold={400}>{cartCount[movie.id] || 0}</Title>
                    <Title color='#FFFFFF' fontSize='12px' >ADICIONAR AO CARRINHO</Title>
                </FlexContainer>
            </ButtonCart>
        </Box>
    );
};
