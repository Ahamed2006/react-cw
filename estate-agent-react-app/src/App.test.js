import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Helper to wrap components in Router for testing
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

test('renders welcome message', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/Find Your Perfect Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('navigates to search page', () => {
  renderWithRouter(<App />);
  const searchLink = screen.getByText(/Search Properties/i);
  fireEvent.click(searchLink);
  const searchHeader = screen.getByText(/Search/i); // Assuming header contains "Search"
  expect(searchHeader).toBeInTheDocument();
});

// Add more tests here for filter logic if needed, or component specific tests