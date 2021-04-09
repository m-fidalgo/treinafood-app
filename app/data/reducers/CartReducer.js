import { cartConstants } from "../actions/CartActions";

export const initialState = {
  products: [],
};

export const CartReducer = (store = initialState, action) => {
  switch (action.type) {
    case cartConstants.CART_ADD_PRODUCT:
      return { ...store, products: [...store.products, action.value] };
    case cartConstants.CART_REMOVE_PRODUCT:
      return {
        ...store,
        products: store.products.filter((item) => item !== action.value),
      };
    case cartConstants.CART_CLEAR:
      return { ...store, products: [] };
    default:
      return store;
  }
};
