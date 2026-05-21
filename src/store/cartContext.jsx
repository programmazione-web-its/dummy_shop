import { createContext } from 'react'

const CartContext = createContext({
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateItemQuantity: () => {},
  drawerIsOpen: false,
})

export default CartContext
