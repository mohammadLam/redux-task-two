import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, UPDATE_PRODUCT } from "./action/types"
import { v4 as uuidv4 } from 'uuid'

const initialValue = [
  {
    id: uuidv4(),
    name: 'Asus Vivobook X515MA',
    price: 35500,
    quantity: 20
  },
  {
    id: uuidv4(),
    name: 'Dell E1916HV 18.5 Inch',
    price: 9300,
    quantity: 10
  }, {
    id: uuidv4(),
    name: 'Canon Eos 4000D 18MP',
    price: 36500,
    quantity: 20
  }
]

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_PRODUCT: {
      return [
        ...state,
        {
          id: uuidv4(),
          ...action.payload
        }
      ]
    }

    case UPDATE_PRODUCT: {
      return state.map(product => {
        if (product.id === action.payload.id) {
          return {
            id: action.product.id,
            ...action.payload
          }
        }

        return product
      })
    }

    case DELETE_PRODUCT: {
      return state.filter(product => product.id === action.payload.id)
    }

    case GET_ALL_PRODUCTS: {
      return [...state]
    }

    default: {
      return state
    }
  }
}

export default productReducer