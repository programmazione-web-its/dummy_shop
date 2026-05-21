import data from './data/products.json'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState } from 'react'

import CartContext from './store/cartContext'

import BasicLayout from './layouts/BasicLayout'
import Homepage from './pages/Homepage'
import Beauty from './pages/Beauty'
import Fragrances from './pages/Fragrances'

function App() {
  const { products } = data || {}
  const router = createBrowserRouter([
    {
      path: '/',
      element: <BasicLayout products={products} />,
      children: [
        { index: true, element: <Homepage /> },
        { path: 'beauty', element: <Beauty /> },
        { path: 'fragrances', element: <Fragrances /> },
      ],
    },
  ])

  const [openDrawer, setOpenDrawer] = useState(false)

  const [cartProducts, setCartProducts] = useState([])

  function addToCart(item) {
    setCartProducts((prev) => {
      const idx = prev.findIndex((el) => el.id === item.id)
      if (idx === -1) return [...prev, { ...item, quantity: 1 }]
      return prev.map((el, i) =>
        i === idx ? { ...el, quantity: el.quantity + 1 } : el,
      )
    })
  }

  function removeFromCart(id) {
    setCartProducts((prev) => prev.filter((el) => el.id !== id))
  }

  const cartCtxValue = {
    products: cartProducts,
    isOpen: openDrawer,
    openDrawer: setOpenDrawer,
    addToCart,
    removeFromCart,
  }

  return (
    <CartContext value={cartCtxValue}>
      <RouterProvider router={router} />
    </CartContext>
  )
}

export default App
