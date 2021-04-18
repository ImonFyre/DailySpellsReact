/*import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/


describe("addition", () => {
	it('knows that 2 + 2 == 4', () => {
		expect (2+2).toBe(4);
	});
});

export {}