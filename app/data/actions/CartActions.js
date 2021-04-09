export const cartConstants = {
  CART_ADD_PRODUCT: "CART_ADD_PRODUCT",
  CART_REMOVE_PRODUCT: "CART_REMOVE_PRODUCT",
  CART_CLEAR: "CART_CLEAR",
  CART_SHOP_REQUEST: "CART_SHOP_REQUEST",
};

export const cartAddProduct = (value) => ({
  type: cartConstants.CART_ADD_PRODUCT,
  value,
});

export const cartRemoveProduct = (value) => ({
  type: cartConstants.CART_REMOVE_PRODUCT,
  value,
});

export const cartClear = () => ({
  type: cartConstants.CART_CLEAR,
});

export const cartShopRequest = () => ({
  type: cartConstants.CART_SHOP_REQUEST,
});
