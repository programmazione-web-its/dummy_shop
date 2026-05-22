import { getDiscountedPrice } from '../utils'

import Button from './Button'

import fallbackImg from '../assets/fallback.png'

export default function ProductCard({ product }) {
  const { id, title, category, thumbnail, price, discountPercentage, stock } =
    product || {}

  const finalPrice = discountPercentage
    ? getDiscountedPrice(price, discountPercentage)
    : price
  return (
    <div id={id} className='relative flex flex-col h-full'>
      {discountPercentage && (
        <span className='px-4 py-1 bg-forest text-sand absolute -left-[10px] -top-[10px]'>
          {Math.round(discountPercentage)}%
        </span>
      )}
      <div className='aspect-[3/4] overflow-hidden bg-cream-dark '>
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
      <div className='bg-warm-white p-4 grow flex flex-col'>
        <h3 className='text-2xl text-ink font-serif'>{title}</h3>
        <div className='uppercase text-sm text-forest-light mb-3'>
          {category}
        </div>
        <div className='mt-auto font-serif text-lg'>
          <p className='inline-block'>€ {finalPrice}</p>
          {discountPercentage && (
            <p className='opacity-40 text-md inline-block ml-4 line-through'>
              € {price}
            </p>
          )}
        </div>
        <div className='flex justify-between flex-wrap gap-3 mt-3'>
          {stock > 0 ? (
            <Button classes='grow lg:basis-[45%]'>BUY</Button>
          ) : (
            <p className='bg-ink px-3 py-1 text-center text-warm-white inline-block'>
              Sold out
            </p>
          )}
          <Button
            classes='grow lg:basis-[45%]'
            type='outlined'
            to={`/products/${id}`}
          >
            VIEW
          </Button>
        </div>
      </div>
    </div>
  )
}
