import { ADD_ITEM, DELETE_ITEM, GET_ALL_ITEMS, UPDATE_ITEM } from "./types"

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload: {
      productId: payload.productId
    }
  }
}

export const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload: {
      productId: payload.productId
    }
  }
}

export const updateItem = (payload) => {
  return {
    type: UPDATE_ITEM,
    payload: {
      productId: payload.productId,
      quantity: payload.quantity
    }
  }
}

export const getAllItems = () => {
  return {
    type: GET_ALL_ITEMS
  }
}