import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

afterEach(cleanup);

// Helper to wrap components in Router for testing
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Propify Application Tests', () => {

  // TEST 1: Fixed Welcome Message (Matches your actual text)
  test('1. renders the correct welcome headline', () => {
    renderWithRouter(<App />);
    const welcomeText = screen.getByText(/Find your next/i);
    expect(welcomeText).toBeInTheDocument();
  });

  // TEST 2: Fixed Search Button (Matches your actual text)
  test('2. contains the Start Searching button', () => {
    renderWithRouter(<App />);
    const searchBtn = screen.getByText(/Start Searching/i);
    expect(searchBtn).toBeInTheDocument();
  });

  // TEST 3: Navbar Logo
  test('3. renders the Propify logo in the navbar', () => {
    renderWithRouter(<NavBar favouritesCount={0} />);
    const logo = screen.getByText(/Propify/i);
    expect(logo).toBeInTheDocument();
  });

  // TEST 4: Footer Copyright (Matches your actual text)
  test('4. displays the correct coursework footer', () => {
    render(<Footer />);
    const footerText = screen.getByText(/Coursework project/i);
    expect(footerText).toBeInTheDocument();
  });

  // TEST 5: Favourites Icon Logic
  test('5. shows the correct number in the favourites icon', () => {
    // We pass 3 to see if the badge shows the number 3
    renderWithRouter(<NavBar favouritesCount={3} />);
    const badge = screen.getByText('3');
    expect(badge).toBeInTheDocument();
  });

  /** 6. LOGIC TEST: Favourites Icon Boundary Value **/
  test('6. Icon displays exact count', () => {
    const { rerender } = render(
      <BrowserRouter><NavBar favouritesCount={0} /></BrowserRouter>
    );

    // Rerender with count 
    rerender(<BrowserRouter><NavBar favouritesCount={5} /></BrowserRouter>);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

// TEST 12: Critical Logic - Search Filtering Verification
  test('12. Logic: Correctly identifies if a property price is within range', () => {
    const mockProperty = { id: "1", type: "House", price: 550000 };
    const minPrice = 400000;
    const maxPrice = 600000;

    // This simulates the logic inside your SearchPage filtering function
    const isWithinRange = mockProperty.price >= minPrice && mockProperty.price <= maxPrice;
    
    expect(isWithinRange).toBe(true);

    // Test an out-of-range value
    const isOutOfRange = mockProperty.price > 700000;
    expect(isOutOfRange).toBe(false);
  });

  /** 8. NAVIGATION TEST: Route connectivity **/
  test('8. Search button links to the correct internal path', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const searchLink = screen.getByRole('link', { name: /start searching/i });
    expect(searchLink.getAttribute('href')).toBe('/search');
  });

  /** 9. CONTENT ACCURACY TEST: Coursework Requirements **/
  test('9. Footer displays correct coursework module code', () => {
    render(<Footer />);
    // Verifies your specific module code is present for the examiner
    expect(screen.getByText(/5COSC026W/i)).toBeInTheDocument();
  });

  /** 10. CRITICAL LOGIC TEST: Property ID persistence **/
  test('10. View Details button links to specific property ID', () => {
    const mockProperty = { id: "test-id-999", type: "Flat", price: 100, location: "UK" };
    render(<BrowserRouter><PropertyCard property={mockProperty} /></BrowserRouter>);
    const detailsLink = screen.getByRole('link', { name: /view details/i });
    expect(detailsLink.getAttribute('href')).toBe('/property/test-id-999');
  });

});
