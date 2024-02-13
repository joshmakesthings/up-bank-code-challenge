import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders final balance text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Final balance/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders deposit amount field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Starting with/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders investment term field', () => {
  render(<App />);
  const linkElement = screen.getByText(/Investment term/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders interest rate field', () => {
  render(<App />);
  const linkElement = screen.getByText(/interest rate/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders frequency field', () => {
  render(<App />);
  const linkElement = screen.getByText(/select frequency/i);
  expect(linkElement).toBeInTheDocument();
});
