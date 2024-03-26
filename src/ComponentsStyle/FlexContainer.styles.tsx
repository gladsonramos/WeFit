import styled from "styled-components";

export const FlexContainer = styled.div<any>`
  display: flex;
  gap: 8px;
  align-items: center; 
  justify-content: ${(props) => props.align || 'left'}; ;
  
`;

export const ContainerSpace = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    & > * {
  
      margin: 0;
    }
  }

  @media only screen and (max-width: 480px) {
    flex-wrap: wrap;
  }
`;

export const MooviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
  grid-gap: 16px; 
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }
`;