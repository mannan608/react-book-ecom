import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BookProvider } from "./context/BookContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WishlistProvider>
      <BrowserRouter>
        <BookProvider>
          <App />
        </BookProvider>
      </BrowserRouter>
    </WishlistProvider>
  </StrictMode>
);
