import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Buttons.styles';

describe('Button', () => {
    it('deve exibir o texto fornecido', () => {
        const { getByText } = render(<Button>Hola mundo</Button>);
        expect(getByText('Hola mundo')).toBeInTheDocument();
    });

    it('deve chamar uma função quando o botão for clicado', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Botão</Button>);
        fireEvent.click(getByText('Botão'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
