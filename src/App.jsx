import { Provider } from 'react-redux'
import store from './redux/store'
import ProductsContainer from './components/products/ProductsContainer'
import CartContainer from './components/cart/CartContainer'

function App() {
  return (
    <Provider store={store}>
      <div className='bg-gray-50 h-full md:h-screen'>
        <div className='grid grid-cols-12 gap-6'>
          <ProductsContainer />
          <CartContainer />
        </div>
      </div>
    </Provider>
  )
}

export default App
