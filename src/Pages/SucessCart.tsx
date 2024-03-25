import { useNavigate } from "react-router-dom"
import { Button } from "../ComponentsStyle/Buttons.styles"
import { Box, Espacing } from "../ComponentsStyle/Container.styles"
import { ImageSucess } from "../ComponentsStyle/Images.styles"
import { Title } from "../ComponentsStyle/Title.styles"
import DisplayStructure from "../ComponentsTSX/Display"
import { useContext, useEffect } from "react"
import { AuthContext } from "../Router/Auth"

export const SucessCart = () => {

    const { setCart } = useContext<any>(AuthContext);

    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    };

    useEffect(() => {
        setCart([])
    }, [setCart]);

    return (
        <DisplayStructure >
            <Box padding={"64px"}>
                <Title color='#2F2E41' fontSize='20px' bold={700} >
                    Compra realizada com sucesso
                </Title>
                <Espacing />
                <ImageSucess alt='ErrorApiImg' />
                <Espacing />
                <Button style={{ width: '173px' }} onClick={navigateToHome}>
                    <Title color='#FFFFFF' fontSize='12px' bold={700} >
                        Voltar
                    </Title>
                </Button>
            </Box>
        </DisplayStructure>
    )
}
