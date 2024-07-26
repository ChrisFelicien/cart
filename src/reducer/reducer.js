export const initialState = {
  cart: [],
  currentItem: {},
  products: [],
  isLoading: false,
  cartAmount: 0,
  itemInCart: 0,
  error: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "startFetching":
      return { ...state, isLoading: true };
    case "error":
      return { ...state, error: true, isLoading: false };
    case "endFetching":
      return { ...state, isLoading: false };
    case "ready":
      return { ...state, isLoading: false, products: action.payload };
    case "getSingleProduct":
      return { ...state, isLoading: false, currentItem: action.payload };
    case "addToCart":
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    default:
      return state;
  }
};
