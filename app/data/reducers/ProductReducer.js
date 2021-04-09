import { productsConstants } from "../actions/ProductActions";

export const initialState = {
  productList: [],
  selectedProduct: null,
};

export const ProductReducer = (store = initialState, action) => {
  switch (action.type) {
    case productsConstants.PRODUCTS_RESPONSE:
      return { ...store, productList: action.value };
    case productsConstants.PRODUCT_SELECT:
      return { ...store, selectedProduct: action.value };
    default:
      return store;
  }
};
