export const productsConstants = {
  PRODUCTS_REQUEST = 'PRODUCTS_REQUEST',
  PRODUCTS_RESPONSE = 'PRODUCTS_RESPONSE',
  PRODUCT_SELECT = 'PRODUCT_SELECT'
}

export const productsRequest = () => ({
  type: PRODUCTS_REQUEST
})

export const productsResponse = (value) => ({
  type: PRODUCTS_RESPONSE,
  value
})

export const productSelect = (value) => ({
  type: PRODUCT_SELECT,
  value
})