import data from '../data/products.json'

import ProductsGrid from '../components/ProductsGrid'

export default function Beauty() {
  const { products } = data || {}

  const beautyProducts = products?.filter((el) => el.category === 'beauty')

  return (
    <>
      <div className='container'>
        <h1 className='text-3xl uppercase font-bold'>Beauty products</h1>
      </div>
      <ProductsGrid products={beautyProducts} />
    </>
  )
}
