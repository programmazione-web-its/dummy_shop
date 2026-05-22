import { ShoppingCartIcon, UserCircleIcon } from '@phosphor-icons/react'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import Nav from './Nav'
import Button from './Button'
import CartDrawer from './CartDrawer'

export default function Header({ products }) {
  const [openCart, setOpenCart] = useState(false)

  return (
    <>
      <header className='sticky top-0 py-4 z-[99] bg-cream '>
        <div className='container flex justify-between items-end gap-6'>
          <Link to='/'>
            <h1 className='text-terra uppercase text-3xl'>My dummy shop</h1>
          </Link>
          <div className='ml-auto'>
            <Nav />
          </div>
          <div className='flex gap-3 items-center'>
            <Button type='icon' href='/login'>
              <UserCircleIcon size={24} />
            </Button>
            <Button type='icon' onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartIcon size={24} />
            </Button>
          </div>
        </div>
      </header>

      <CartDrawer products={products} isOpen={openCart} />
    </>
  )
}
