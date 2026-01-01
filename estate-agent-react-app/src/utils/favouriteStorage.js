const STORAGE_KEY = 'real_estate_app_favs';

// Load favourites from the browser's local memory
export const getStoredFavourites = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Could not load favourites", error);
    return [];
  }
};

// Save the current list of favourites to memory
export const saveStoredFavourites = (favourites) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites));
  } catch (error) {
    console.error("Could not save favourites", error);
  }
};