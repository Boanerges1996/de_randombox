const ADD_CART_ITEM = "ADD_CART_ITEM";
const REMOVED_CART_ITEM = "REMOVED_CART_ITEM";

const addCartItemRedux = (payload) => ({ type: ADD_CART_ITEM, payload });
const removeCartItemRedux = (payload) => ({ type: REMOVED_CART_ITEM, payload });

export {
  ADD_CART_ITEM,
  REMOVED_CART_ITEM,
  //
  addCartItemRedux,
  removeCartItemRedux,
};
