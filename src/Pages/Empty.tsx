import { useContext } from "react"
import { Button } from "../ComponentsStyle/Buttons.styles"
import { Box, Espacing } from "../ComponentsStyle/Container.styles"
import { ImageError } from "../ComponentsStyle/Images.styles"
import { Title } from "../ComponentsStyle/Title.styles"
import { AuthContext } from "../Router/Auth"
import { useNavigate } from "react-router-dom"

export const Empty = () => {
    const { setReload } = useContext<any>(AuthContext);
    const navigate = useNavigate();
    const Reload = () => {
        navigate('/');
        setReload(true)
    };

    return (
        <Box padding={"64px"}>
            <Title color='#2F2E41' fontSize='20px' bold={700} >
                Parece que não há nada por aqui :(
            </Title>
            <Espacing />
            <ImageError alt='ErrorApiImg' />
            <Espacing />
            <Button style={{ width: '173px' }} onClick={() => Reload()}>
                <Title color='#FFFFFF' fontSize='12px' bold={700} >
                    Recarregar página
                </Title>
            </Button>
        </Box>
    )
}
