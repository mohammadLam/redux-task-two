import React from 'react'
import { useSelector } from 'react-redux'
import BoxUI from './BoxUi'
import CartItem from './CartItem'

const CartContainer = () => {
  const cartItems = useSelector(state => state.cart)

  return (
    <div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4'>
      <div className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
        {cartItems.map(cart => (
          <CartItem key={cart.id} cart={cart} />
        ))}

        <BoxUI headerText='Total Item' value={0} />
      </div>

      <div className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
        <BoxUI headerText='Total Item' value={0} />
      </div>
    </div>
  )
}

export default CartContainer
