import styled from "styled-components";

interface BoxProps {
  padding?: string
}
interface EspaccingProps {
  espaccing?: string
}

export const Container = styled.div`
 padding: 0px 16px ;

`;

export const Box = styled.div<BoxProps>`
  flex-grow: 1;
  background-color: white;
  border-radius: 4px;
  padding: ${(props) => props.padding || '16px'};
  text-align: center;

`;

export const Espacing = styled.div<EspaccingProps>`
 padding-top:  ${(props) => props.espaccing || "24px"}
`;