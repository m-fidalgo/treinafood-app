export const productsConstants = {
  PRODUCTS_REQUEST: "PRODUCTS_REQUEST",
  PRODUCTS_RESPONSE: "PRODUCTS_RESPONSE",
  PRODUCT_SELECT: "PRODUCT_SELECT",
};

export const productsRequest = () => ({
  type: productsConstants.PRODUCTS_REQUEST,
});

export const productsResponse = (value) => ({
  type: productsConstants.PRODUCTS_RESPONSE,
  value,
});

export const productSelect = (value) => ({
  type: productsConstants.PRODUCT_SELECT,
  value,
});
