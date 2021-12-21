import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders benford title', () => {
  render(<App />);
  const linkElement = screen.getByText(/benford/i);
  expect(linkElement).toBeInTheDocument();
});
