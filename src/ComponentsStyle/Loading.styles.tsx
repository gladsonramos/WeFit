import { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { AuthContext } from '../Router/Auth';

interface LoadingProps {
  visible?: boolean;
}

const LoadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div<LoadingProps>`
  display: ${props => props.visible ? 'flex' : 'none'}; 
  align-items: center;
  justify-content: center;
  width: 100%; 
  height: 100%; 
`;

export const SpinnerImage = styled.img`
  width: 50px;
  height: 50px;
  animation: ${LoadingAnimation} 2s linear infinite;
`;

const Spinner: React.FC<LoadingProps> = ({ visible }) => {
    const loadingImage = require('../Assets/load-spinner.png');
    const { loading } = useContext<any>(AuthContext);
    return (
        <LoadingSpinner visible={visible || loading}>
            <SpinnerImage src={loadingImage} alt="Loading" />
        </LoadingSpinner>
    );
};

export default Spinner;
