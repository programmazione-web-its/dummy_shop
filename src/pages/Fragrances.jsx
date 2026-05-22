import data from '../data/products.json'

import ProductsGrid from '../components/ProductsGrid'

export default function Fragrances() {
  const { products } = data || {}
  const frangrances = products.filter((el) => el.category === 'fragrances')

  return (
    <>
      <div className='container'>
        <h1 className='text-3xl uppercase font-bold'>Frangraces</h1>
        <ProductsGrid products={frangrances} />
      </div>
    </>
  )
}
