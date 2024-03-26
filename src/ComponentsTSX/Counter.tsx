import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../ComponentsStyle/FlexContainer.styles';
import { Title } from '../ComponentsStyle/Title.styles';
import { Image } from '../ComponentsStyle/Images.styles';

interface ProductData {
  id: string;
  quantity: number;
}

interface CounterProps {
  data: ProductData;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CounterContainer = styled.div`
  width: 62px;
  height: 26px;
  border: 1px solid #D9D9D9;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 59px;
  }

  @media only screen and (max-width: 480px) {
    width: 59px;
  }
`;

const More = require('../Assets/More.png');
const Less = require('../Assets/Less.png');

const Counter: React.FC<CounterProps> = ({ data, onUpdateQuantity }) => {
    const [quantity, setQuantity] = useState<number>(data.quantity);

    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onUpdateQuantity(data.id, newQuantity);
    };

    const handleDecrease = () => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onUpdateQuantity(data.id, newQuantity);
        }
    };

    return (
        <FlexContainer>
            <Image src={Less} alt="Menos" onClick={handleDecrease} />
            <CounterContainer>
                <Title bold={400} color='#2F2E41' fontSize='14px'>{quantity}</Title>
            </CounterContainer>
            <Image src={More} alt="Mais" onClick={handleIncrease} />
        </FlexContainer>
    );
};

export default Counter;
