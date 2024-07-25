import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { reducer, initialState } from "./reducer/reducer.js";
import { CartProvider } from "./context/CartProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider initialState={initialState} reducer={reducer}>
      <App />
    </CartProvider>
  </React.StrictMode>
);
