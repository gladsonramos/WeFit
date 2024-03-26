import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DisplayStructure from '../ComponentsTSX/Display';
import { Title } from '../ComponentsStyle/Title.styles';
import { FlexContainer, ContainerSpace } from '../ComponentsStyle/FlexContainer.styles';
import { Box } from '../ComponentsStyle/Container.styles';
import { Button } from '../ComponentsStyle/Buttons.styles';
import { Espacing } from '../ComponentsStyle/Container.styles';
import MyTableDesktop from '../ComponentsTSX/MytableDesktop';
import MyTableMobile from '../ComponentsTSX/MytableMobile';
import { AuthContext } from '../Router/Auth';
import { Empty } from './Empty';
import { View } from '../ComponentsStyle/View.styled';

const MyCart = () => {

    const { setCart } = useContext<any>(AuthContext);
    const location = useLocation();
    const cart = location.state?.cart;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [cartItems, setCartItems] = useState(cart);

    const navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/', { state: { home: true, carts: cartItems } });
        setCart(cartItems)
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [cart]);


    const onUpdateQuantity = (itemId: string, newQuantity: number) => {
        const updatedCart = cartItems.map((item: any) => {
            if (item.id === itemId) {
                const subtotal = (parseFloat(item.price) * newQuantity).toFixed(2).replace('.', ','); // Arredonda o subtotal para duas casas decimais
                return {
                    ...item,
                    quantity: newQuantity,
                    subtotal: subtotal
                };
            }
            return item;
        });
        setCartItems(updatedCart);
    };


    const removeItem = (itemId: string) => {
        const updatedCart = cartItems.filter((item: any) => item.id !== itemId);
        setCartItems(updatedCart);
        setCart(updatedCart);
    };

    const Finish = () => {
        navigate('/Sucess');
    };

    const total = cartItems.reduce((accumulator: number, currentItem: { subtotal: string; }) => {
        const subtotalValue = parseFloat(currentItem.subtotal.replace(',', '.'));
        if (!isNaN(subtotalValue)) {
            return accumulator + subtotalValue;
        } else {
            return accumulator;
        }
    }, 0);

    const formattedTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
 
    return (
        <DisplayStructure onClick={handleClickHome}>
            {cartItems.length === 0 ? (
                <Empty />
            ) : (
                <Box padding={isMobile ? "16px" : "24px"}>
                    {isMobile ? (
                        <MyTableMobile data={cartItems} onUpdateQuantity={onUpdateQuantity} removeItem={removeItem} total={formattedTotal} Finish={Finish} />
                    ) : (
                        <>
                            <MyTableDesktop data={cartItems} onUpdateQuantity={onUpdateQuantity} removeItem={removeItem} />
                            <Espacing />
                            <View style={{ height: '1px', backgroundColor: '#999999' }}></View>
                            <Espacing />
                            <ContainerSpace>
                                <View style={{ width: '173px' }}>
                                    <Button onClick={Finish}>
                                        <Title fontSize='12px' align='center'>
                                            FINALIZAR PEDIDO
                                        </Title>
                                    </Button>
                                </View>
                                <FlexContainer>
                                    <Title color='#999999' fontSize='14px'>TOTAL</Title>
                                    <Title color='#2F2E41' fontSize='24px'>{formattedTotal}</Title>
                                </FlexContainer>
                            </ContainerSpace>
                        </>
                    )}
                </Box>
            )}
        </DisplayStructure>
    );
}

export default MyCart;
