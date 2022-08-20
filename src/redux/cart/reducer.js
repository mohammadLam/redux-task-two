import { ADD_ITEM, DELETE_ITEM, GET_ALL_ITEMS, UPDATE_ITEM } from "./action/types";
import { v4 as uuidv4 } from 'uuid'


const initialValue = [{
  id: uuidv4(),
  name: 'Asus Vivobook X515MA',
  price: 35500,
  quantity: 2
}]

const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_ITEM: {

      return [...state, {
        productId: action.payload.productId,
        quantity: 1,
      }]
    }

    case DELETE_ITEM: {
      return state.filter(cart => cart.productId !== action.payload.productId)
    }

    case UPDATE_ITEM: {
      return state.map(cart => {
        if (cart.productId === action.payload.productId) {
          return {
            ...cart,
            quantity: action.payload.quantity,
            price: cart.price
          }
        }

        return cart
      })
    }

    case GET_ALL_ITEMS: {
      return [...state]
    }

    default:
      return state;
  }
}

export default cartReducer