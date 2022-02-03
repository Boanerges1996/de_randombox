const { ADD_CART_ITEM, REMOVED_CART_ITEM } = require("../actions/cart");

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case REMOVED_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { cartReducer };
