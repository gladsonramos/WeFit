import React from 'react';
import { render, screen } from '@testing-library/react';
import AppRoutes from './Router/Router';

test('renders learn react link', () => {
  render(<AppRoutes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
