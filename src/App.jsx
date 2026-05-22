import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useState } from 'react'

import CartContext from './store/cart-context'

import Homepage from './pages/Homepage'
import Beauty from './pages/Beauty'
import Account from './pages/Account'
import BasicLayout from './layouts/BasicLayout'
import Fragrances from './pages/Fragrances'
import SingleProduct from './pages/SingleProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/beauty',
        element: <Beauty />,
      },
      {
        path: '/frangrances',
        element: <Fragrances />,
      },
      {
        path: '/products/:productId',
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: '/account',
    element: <Account />,
  },
])

function App() {
  const [cartProducts, setCartProducts] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  const initialCtx = {
    products: cartProducts,
    isOpen: drawerOpen,
    openDrawer: setDrawerOpen,
  }
  return (
    <CartContext.Provider value={initialCtx}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  )
}

export default App
