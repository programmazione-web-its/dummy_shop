import { getDiscountedPrice } from '../utils'

import { TrashIcon } from '@phosphor-icons/react'

import { useContext } from 'react'

import CartContext from '../store/cartContext'

import Button from './Button'
import fallbackImg from '../assets/fallback.png'

export default function ProductListItem({ product }) {
  const { id, title, thumbnail, price, discountPercentage, quantity } =
    product || {}

  const cartCtx = useContext(CartContext)

  const { removeFromCart } = cartCtx

  const finalPrice = discountPercentage
    ? getDiscountedPrice(price, discountPercentage)
    : price
  return (
    <div id={id} className='grid grid-cols-6 gap-3 '>
      <div className='aspect-square overflow-hidden bg-cream-dark col-span-2'>
        {thumbnail ? (
          <img
            className='w-full h-full object-cover'
            src={thumbnail}
            alt={`${title} thumbnail`}
          />
        ) : (
          <img className='w-full h-full object-cover' src={fallbackImg} />
        )}
      </div>
      <div className='bg-warm-white flex flex-col col-span-4'>
        <h6 className='text-lg text-ink font-serif'>{title}</h6>

        <div className='mb-3 font-serif text-lg'>
          <p className='inline-block'>€ {finalPrice}</p>
          {discountPercentage && (
            <p className='opacity-40 text-md inline-block ml-4 line-through'>
              € {price}
            </p>
          )}
        </div>
        <div className='flex justify-between items-center mt-auto '>
          <p className='text-xs'>Qty: {quantity}</p>
          <Button type='icon' onClick={() => removeFromCart(id)}>
            <TrashIcon size={16} />
          </Button>
        </div>
      </div>
    </div>
  )
}
