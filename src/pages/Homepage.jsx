import ProductsGrid from '../components/ProductsGrid'

import data from '../data/products.json'

export default function Homepage() {
  const { products } = data || {}
  return (
    <div>
      <ProductsGrid products={products} />
    </div>
  )
}
