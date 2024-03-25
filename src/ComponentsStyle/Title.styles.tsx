import styled from "styled-components";

interface TitleProps {
  fontSize?: string;
  bold?: number;
  align?: string;
  color?: string;
  hideOnMobile?: boolean; // Nova prop para ocultar em telas de celular
}

export const Title = styled.div<TitleProps>`
  font-size: ${(props) => props.fontSize || '20px'}; 
  color: ${(props) => props.color || 'white'};
  font-weight: ${(props) => props.bold || 700};
  text-align: ${(props) => props.align || 'center'}; // Alinhamento condicional à direita

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.hideOnMobile ? 'none' : 'block')}; // Oculta o texto em telas de celular
  }

  @media only screen and (max-width: 480px) {
    display: ${(props) => (props.hideOnMobile ? 'none' : 'block')}; // Oculta o texto em telas de celular
  }
`;
