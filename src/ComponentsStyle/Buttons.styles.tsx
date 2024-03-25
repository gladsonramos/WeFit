import styled from "styled-components";

export const Button = styled.button`
  background-color: #009EDD;
  align-self: center;
  padding: 11px 0 ;
  width: 100%; 
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
`;

interface ButtonCartProps {
  isClicked: boolean;
}

export const ButtonCart = styled.button<ButtonCartProps>`
  background-color: ${props => (props.isClicked ? '#039B00' : '#009edd')};
  cursor: pointer;
  border-radius: 4px;
  border-style: none;
  color: white;
  width: 100%;
  padding: 11px 0; 
`;
