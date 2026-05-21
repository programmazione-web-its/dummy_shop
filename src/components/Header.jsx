import { ShoppingCartIcon, UserCircleIcon } from '@phosphor-icons/react'

import { useContext } from 'react'

import CartContext from '../store/cartContext'

import Button from './Button'
import CartDrawer from './CartDrawer'
import Nav from './Nav'

export default function Header() {
  const cartCtx = useContext(CartContext)
  const { openDrawer } = cartCtx

  return (
    <>
      <header className='sticky top-0 py-4 z-[99] bg-cream '>
        <div className='container flex justify-between items-end gap-6'>
          <a href='/'>
            <h1 className='text-terra uppercase text-3xl'>My dummy shop</h1>
          </a>
          <div className='ml-auto'>
            <Nav />
          </div>
          <div className='flex gap-3 items-center'>
            <Button type='icon' href='/login'>
              <UserCircleIcon size={24} />
            </Button>
            <Button type='icon' onClick={() => openDrawer(true)}>
              <ShoppingCartIcon size={24} />
            </Button>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  )
}
