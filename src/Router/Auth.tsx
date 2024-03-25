import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import axios from 'axios';

interface Movie {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface AuthContextType {
    cart: Movie[]; // Tipo do estado do carrinho
    setCart: Dispatch<SetStateAction<Movie[]>>; // Tipo da função setCart
    data: Movie[];
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    error: boolean;
    setReload: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
    cart: [],
    setCart: () => { },
    data: [],
    loading: true,
    setLoading: () => { },
    error: false,
    setReload: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [reload, setReload] = useState(false);
    const [data, setData] = useState<Movie[]>([]);

    const Images = [

        {
            "id": 1,
            "title": "Viúva Negra",
            "price": 9.99,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
        },
        {
            "id": 2,
            "title": "Shang-chi",
            "price": 30.99,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
        },
        {
            "id": 3,
            "title": "Homem Aranha",
            "price": 29.9,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
        },
        {
            "id": 5,
            "title": "Morbius",
            "price": 1.5,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png"
        },
        {
            "id": 6,
            "title": "Batman",
            "price": 21.9,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png"
        },
        {
            "id": 4,
            "title": "Eternos",
            "price": 17.9,
            "image": "https://wefit-react-web-test.s3.amazonaws.com/eternals.png"
        },
    ]

    // Função para chamar a API
    const fetchData = async () => {
        setReload(false);
        setLoading(true);
        try {
            const response = await axios.get<Movie[]>('http://localhost:3001/img');
            setData(response.data);
            setError(false);
        } catch (error) {
            setData(Images)
            setError(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [reload]);

    return (
        <AuthContext.Provider value={{ cart, setCart, data, loading, setLoading, error, setReload }}>
            {children}
        </AuthContext.Provider>
    );
};
