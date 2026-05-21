import classNames from 'classnames'
import { XCircleIcon } from '@phosphor-icons/react'
import { SmileySadIcon } from '@phosphor-icons/react'

import { useContext } from 'react'

import CartContext from '../store/cartContext'

import Button from './Button'
import ProductListItem from './ProductListItem'

export default function CartDrawer() {
  const cartCtx = useContext(CartContext)

  const { products, isOpen, openDrawer } = cartCtx

  const cartTotal =
    products?.length > 0
      ? products
          .reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
          .toFixed(2)
      : null
  return (
    <div
      className={classNames(
        'fixed w-[400px] h-screen bg-warm-white right-0 inset-y-0 z-[999] shadow-sm  py-8 transition-transform',
        {
          'translate-x-0': isOpen,
          'translate-x-full': !isOpen,
        },
      )}
    >
      <div className='flex justify-between items-center px-6'>
        <h2 className='text-xl uppercase'>cart</h2>
        <Button type='icon' onClick={() => openDrawer(false)}>
          <XCircleIcon size={24} />
        </Button>
      </div>
      <div className='flex flex-col gap-3 h-full overflow-auto px-6 pb-20 pt-10'>
        {products?.length > 0 ? (
          products.map((item) => (
            <ProductListItem key={item.id} product={item} />
          ))
        ) : (
          <p className='my-auto text-center flex items-center justify-center gap-2'>
            Your cart is empty <SmileySadIcon size={16} />
          </p>
        )}
      </div>
      {cartTotal && (
        <div className='mt-auto  absolute bottom-0 py-3 border-t border-forest w-full bg-warm-white flex justify-between items-center px-6'>
          <span>Total:</span>
          <span>€ {cartTotal}</span>
        </div>
      )}
    </div>
  )
}
