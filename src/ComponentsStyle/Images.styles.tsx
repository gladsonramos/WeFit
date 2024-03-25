import styled from 'styled-components';
import Error from '../Assets/ErrorAPI.png';
import ErrorMobile from '../Assets/ErrorAPIMOBILE.png';
import SucessCartDesktop from '../Assets/SucessCartDesktop.png';
import SucessCartMobile from '../Assets/SucessCartMobile.png';

interface ImageProps {
  mobile?: boolean;
}

export const Image = styled.img`
  height: auto; 
  cursor: pointer;
`;

export const ImageError = styled.img<ImageProps>`
  height: auto; 
  content: url(${Error});

  @media only screen and (max-width: 768px) {
    content: url(${ErrorMobile});
  }

  @media only screen and (max-width: 480px) {
    content: url(${ErrorMobile});
  }
`;

export const ImageSucess = styled.img<ImageProps>`
  height: auto; 
  content: url(${SucessCartDesktop});

  @media only screen and (max-width: 768px) {
    content: url(${SucessCartMobile});
  }

  @media only screen and (max-width: 480px) {
    content: url(${SucessCartMobile});
  }
`;
