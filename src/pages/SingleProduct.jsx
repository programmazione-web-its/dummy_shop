import data from '../data/products.json'

import { useParams } from 'react-router-dom'

export default function SingleProduct() {
  const { productId } = useParams()

  const product = data.products.find((el) => el.id == productId)
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
