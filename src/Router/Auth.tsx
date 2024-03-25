import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import axios from 'axios';
/* import { Images } from "../Images"; */

interface Movie {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface AuthContextType {
    cart: Movie[];
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

    const fetchData = async () => {
        setReload(false);
        setLoading(true);
        try {
            const response = await axios.get<Movie[]>('http://localhost:3001/img');
            setData(response.data);
            setError(false);
        } catch (error) {
            //PASSO A PASSO PARA RENDERIZAR NO CELULAR 

            /*  setData(Images) descomente essa parte do código, e tire o comentário da importação ;) */

            setError(true); //para visualização no telefone, mude para true
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
