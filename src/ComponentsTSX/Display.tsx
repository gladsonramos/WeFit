import React, { useContext, ReactNode } from 'react';
import { Wrapper } from '../ComponentsStyle/Wrapper.styles';
import { Title } from '../ComponentsStyle/Title.styles';
import { Header } from '../ComponentsStyle/Header.styles';
import { Image } from '../ComponentsStyle/Images.styles';
import { FlexContainer } from '../ComponentsStyle/FlexContainer.styles';
import { Container } from '../ComponentsStyle/Container.styles';
import { AuthContext } from "../Router/Auth";
import { View } from '../ComponentsStyle/View.styled';

interface DisplayStructureProps {
    onClick?: () => void;
    children: ReactNode;
}

const DisplayStructure: React.FC<DisplayStructureProps> = ({ onClick, children }) => {
    const cartImage = require('../Assets/Ico.png');
    const { cart } = useContext<any>(AuthContext);

    return (
        <Wrapper>
            <Header>
                <Title>WeMovies</Title>
                <FlexContainer>
                    <View>
                        <Title fontSize={"14px"} bold={600} hideOnMobile={true}>Meu carrinho</Title>
                        <Title fontSize={"12px"} bold={600} align='right' color='#999999'>{cart.length || 0} itens</Title>
                    </View>
                    <Image onClick={onClick} src={cartImage} alt="Cart" />
                </FlexContainer>
            </Header>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
};

export default DisplayStructure;
