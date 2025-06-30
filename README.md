# BarkBoard 🐾
### A dynamic dog breed explorer.

---

## Project Description

**BarkBoard** is a modern, user-friendly web application designed to help you browse and discover dog breeds with ease. Leveraging live data from [The Dog API](https://thedogapi.com/), BarkBoard displays a rich catalog of breeds, allowing users to search by temperament or filter through popular categories such as "Bred for" purposes. The app features a responsive, mobile-friendly layout and a slick theme toggle (Dark/Light mode), providing a seamless experience on any device. Developed as part of the Fluxxion MERN Fellowship, BarkBoard demonstrates best practices in frontend development, dynamic UI updates, and accessibility.

---

## Features

- **Dynamic Data Fetching:** Loads all dog breed data asynchronously from The Dog API on page load.
- **Interactive Card UI:** Each breed is displayed in a stylish card showing its image, name, weight, height, temperament, and more.
- **Temperament Search:** Use the header search bar to quickly find breeds by temperament (e.g., "Playful", "Loyal").
- **Categorical Filtering:** Easily filter breeds using the sidebar:
  - **Temperament:** Friendly, Stubborn, Protective, etc.
  - **Bred for:** Guard, Hunt, Companion, etc.
- **Responsive Design:** 
  - On mobile/tablet, a toggleable sidebar keeps the UI uncluttered.
  - On desktop screens (>1050px), a persistent, sticky sidebar enhances navigation.
- **Theme Toggling:** Instantly switch between Dark Mode and Light Mode using the sidebar toggle.

---

## Technologies Used

- **Front-End:** HTML5, CSS3, JavaScript (ES6)
- **Styling:** 
  - CSS Variables (for theming)
  - Flexbox & Media Queries (for layout and responsiveness)
- **API:** [The Dog API](https://thedogapi.com/) (for breed data)
- **Icons:** [Font Awesome](https://fontawesome.com/)

---

## Getting Started

To run BarkBoard locally, follow these simple steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/shah541-g/BarkBoard
    ```
2. **Open `index.html` in your web browser.**  
   That's it! No build steps or dependencies required.

---

## File Structure

```
.
├── assets/
│   ├── icons/
│   └── images/
├── stylesheets/
│   ├── responsive-queries.css
│   ├── sidebar-style.css
│   └── style.css
├── js/
│   ├── data-fetching.js
│   └── logical-functionalities.js
└── index.html
```

---

## Code Highlights & Logic

### `js/data-fetching.js`

- **Asynchronous Data Loading:**  
  The `fetch_data` function uses `async/await` to request all breed data from The Dog API and populates the `dogs_data` array. Once loaded, it calls `show_cards` to render the cards.
- **Dynamic Card Creation:**  
  The `createDogCard` function programmatically builds each breed card's HTML from the fetched data, ensuring the UI is always in sync with the latest data and reducing repetitive HTML in `index.html`.
- **Filtering Logic:**  
  - `search` (temperament search bar), `search_Temperament`, and `search_bred_for` functions filter the master `dogs_data` array based on user input or sidebar clicks.
  - After filtering, the UI is instantly refreshed by calling `show_cards`, which rebuilds the card list based on the filtered results.

### `js/logical-functionalities.js`

- **Theme Switching:**  
  The `switch_mode` function toggles a boolean flag and uses `document.documentElement.style.setProperty` to update CSS variables (like `--body-color`, `--card-bg-color`, etc.), instantly switching the theme across the app.
- **Sidebar Toggle:**  
  The `toggleSideBar` function toggles the `.is-open` class on the sidebar element, activating a CSS transition to slide the sidebar in/out on smaller screens.

---

## Future Improvements

- **Refactor Filter Functions:**  
  Currently, multiple event listeners are attached to each `.row` element for filtering. This can be optimized using event delegation on the sidebar to improve performance and maintainability.
- **Loading State:**  
  Add a loading spinner or skeleton cards while data is being fetched from the API for a smoother user experience.
- **"No Results" Message:**  
  Display a user-friendly message if no breeds match the search or filter criteria.
- **Error Handling:**  
  Implement robust error handling for API failures or network issues.
- **Search Debouncing:**  
  Debounce the search input to prevent the search function from firing on every keystroke, optimizing performance for users who type quickly.

---

**Made with ❤️ for the Fluxxion MERN Fellowship**
