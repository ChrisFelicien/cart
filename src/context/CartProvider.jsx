import { useContext } from "react";
import { useReducer, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children, initialState, reducer }) => {
  return (
    <CartContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </CartContext.Provider>
  );
};

const useStateValue = () => useContext(CartContext);

export { useStateValue, CartProvider };
