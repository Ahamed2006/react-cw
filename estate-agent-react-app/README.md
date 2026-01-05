

# Propify - Modern Estate Agency Application

Propify is a React-based web application designed for a premium estate agency. It allows users to browse property listings, view detailed information, manage a favourites list, and search based on specific criteria.

## 🚀 Live Demo
**Deployed URL:** [PASTE_YOUR_GITHUB_PAGES_LINK_HERE]
**GitHub Repository:** [PASTE_YOUR_GITHUB_REPO_LINK_HERE]

## ✨ Key Features
* **Property Search:** Filter properties by type, price range, and location.
* **Favourites System:** Add or remove properties from a persistent favourites list.
* **Dynamic Routing:** Individual pages for property details using React Router.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
* **Accessibility:** Semantic HTML and ARIA labels for screen reader support.

## 🛠️ Technology Stack
* **Frontend:** React.js
* **Routing:** React Router (`HashRouter` for deployment stability)
* **Styling:** CSS3 (Flexbox/Grid)
* **Testing:** Jest & React Testing Library
* **Deployment:** GitHub Pages

## 🧪 Testing
The project includes a robust suite of **12 automated tests** to ensure application stability and logic accuracy.

### To Run Tests:
1. Ensure you have the dependencies installed: `npm install`
2. Run the test suite: `npm test`
3. To view a full coverage report: `npm test -- --coverage`

### Tests Included:
* **UI/UX:** Verifies the presence of branding, navigation links, and the "Start Searching" CTA.
* **State Logic:** Tests the Favourites badge count behavior (0 vs 10+).
* **Data Formatting:** Ensures currency values display correctly with the £ symbol.
* **Routing:** Verifies that "View Details" links point to the correct dynamic property IDs.
* **Accessibility:** Checks for descriptive `alt` text on all property images.
* **Filtering Logic:** Mathematically verifies that the price filter algorithm identifies properties within range.

## 📦 Local Setup & Installation
To run this project locally:

1. Clone the repository:
   ```bash
   git clone [PASTE_YOUR_GITHUB_REPO_LINK_HERE]