import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

export default function SingleProduct() {
  const { productId } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    if (!productId) return
    async function getProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`)
        if (!res.ok) {
          throw new Error()
        }

        const data = await res.json()
        setProduct(data)
      } catch (err) {
        console.error(err)
      }
    }

    getProduct()
  }, [productId])

  const { id, title, description, thumbnail } = product || {}

  // const productArr = data.products.filter((el) => el.id == productId)
  // const { id, name, description, thumbnail } = productArr[0] || {}
  if (!product) {
    return <h1>Product not found</h1>
  }
  return (
    <div
      data-id={id}
      className='container grid grid-cols-1 lg:grid-cols-2 gap-10'
    >
      <div>
        <img src={thumbnail} />
      </div>
      <div>
        <h1 className='text-3xl font-bold font-serif text-forest'>{title}</h1>
        <p className='mt-5'>{description}</p>
      </div>
    </div>
  )
}
