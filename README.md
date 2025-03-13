# Shopping Cart Component

This project demonstrates a Shopping Cart component built using React. The component fetches cart data from the DummyJSON API and displays the items as though the user has added them to the cart for purchase. The component is designed to be responsive, accessible, performant, and efficient.

## Features

- Displays items in the cart fetched from the DummyJSON API.
- Local updates to the cart without making additional API calls.
- Reset button to return the cart to its initial state.
- Responsive design for various screen sizes.
- Accessible and performant implementation.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/dd25-wq/logitech.git
2. Install the dependencies:
    ```sh
    npm install
### Running the Application
1. Start the development server:
    ```sh
    npm start
2. Open http://localhost:3000 in your browser to view the application.



### Project Structure
- `src/`: Contains the source code for the application.
  - `components/`: Contains the React components.
    - `Cart.js`: The main Cart component.
  - `styles/`: Contains the CSS files for styling.
    - `Cart.css`: Styles for the Cart component.
  - `App.js`: The main application file.
  - `index.js`: The entry point of the application.

### API
This project uses the DummyJSON cart API to fetch cart data. For more information, visit the [DummyJSON documentation](https://dummyjson.com/docs/carts).

### Best Practices
- The component is designed to be responsive and accessible.
- Efficient use of network calls by fetching data only once.
- Local state management for cart updates.
- Clean and maintainable code following best practices.
