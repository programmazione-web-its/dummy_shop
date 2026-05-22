import data from '../data/products.json'

import ProductsGrid from '../components/ProductsGrid'

export default function Homepage() {
  const { products } = data || {}

  return <ProductsGrid products={products} />
}
