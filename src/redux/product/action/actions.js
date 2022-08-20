import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS } from "./types"

export const createProduct = (payload) => {
  const { name, price, quantity } = payload

  return {
    type: CREATE_PRODUCT,
    payload: {
      name,
      price,
      quantity
    }
  }
}

export const updateProduct = (payload) => {
  const { id, name, price, quantity } = payload

  return {
    type: CREATE_PRODUCT,
    payload: {
      id,
      name,
      price,
      quantity
    }
  }
}

export const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id: payload.id
    }
  }
}

export const getAllProducts = () => {
  return {
    type: GET_ALL_PRODUCTS
  }
}