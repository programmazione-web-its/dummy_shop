import { ShoppingCartIcon, UserCircleIcon } from '@phosphor-icons/react'

import { Link, useNavigate } from 'react-router-dom'

import { useContext, useRef } from 'react'
import CartContext from '../store/cart-context'

import Button from './Button'
import CartDrawer from './CartDrawer'
import Nav from './Nav'

export default function Header() {
  const cartCtx = useContext(CartContext)
  const { openDrawer } = cartCtx

  const navigate = useNavigate()

  const searchRef = useRef(null)

  function handleSearch() {
    const term = searchRef.current.value
    navigate('/results?q=' + term)
  }

  return (
    <>
      <header className='sticky top-0 py-4 z-[99] bg-cream '>
        <div className='container flex justify-between items-end gap-6'>
          <Link to='/'>
            <h1 className='text-terra uppercase text-3xl'>My dummy shop</h1>
          </Link>
          <div>
            <input ref={searchRef} type='text' placeholder='Cerca prodotto' />
            <Button onClick={handleSearch}>Cerca</Button>
          </div>
          <div className='ml-auto'>
            <Nav />
          </div>
          <div className='flex gap-3 items-center'>
            <Button type='icon' href='/login'>
              <UserCircleIcon size={24} />
            </Button>
            <Button
              classes='relative'
              type='icon'
              onClick={() => openDrawer(true)}
            >
              3
              <ShoppingCartIcon size={24} />
            </Button>
          </div>
        </div>
      </header>

      <CartDrawer />
    </>
  )
}
