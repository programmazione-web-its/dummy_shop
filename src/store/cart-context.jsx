import { createContext } from 'react'

const CartContext = createContext({
  products: [],
  openDrawer: () => {},
})

export default CartContext
