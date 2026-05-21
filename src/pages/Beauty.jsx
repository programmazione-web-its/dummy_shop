import ProductsGrid from '../components/ProductsGrid'

import data from '../data/products.json'

export default function Beauty() {
  const { products } = data || {}
  return (
    <div>
      <ProductsGrid
        products={products.filter((p) => p.category === 'beauty')}
      />
    </div>
  )
}
