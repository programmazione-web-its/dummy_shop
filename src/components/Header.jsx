import { ShoppingCartIcon, UserCircleIcon } from '@phosphor-icons/react'

import { useContext } from 'react'
import { Link } from 'react-router-dom'

import CartContext from '../store/cartContext'

import Button from './Button'
import CartDrawer from './CartDrawer'
import Nav from './Nav'

export default function Header() {
  const cartCtx = useContext(CartContext)
  const { openDrawer, products } = cartCtx

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
            <Button
              type='icon'
              onClick={() => openDrawer(true)}
              classes='relative'
            >
              {products?.length > 0 && (
                <span className='inline-block rounded-full bg-terra text-warm-white text-sm text-center leading-[15px] w-[15px] h-[15px] absolute top-0 right-0 -translate-y-[5px] translate-x-[5px]'>
                  {products.length}
                </span>
              )}
              <ShoppingCartIcon size={24} />
            </Button>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  )
}
