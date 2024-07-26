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
      if (state.cart.map((item) => item.id).includes(action.payload.id)) {
        const { id, order } = action.payload;

        return {
          ...state,
          cart: [
            ...state.cart.map((item) =>
              item.id !== id ? item : { ...item, order: item.order + order }
            ),
          ],
        };
      }
      return { ...state, cart: [...state.cart, { ...action.payload }] };
    case "delete":
      console.log(action.payload);

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      throw new Error("This action is unknown");
  }
};
