import data from '../data/products.json'

import BasicLayout from '../layouts/BasicLayout'
import ProductsGrid from '../components/ProductsGrid'

export default function Homepage() {
  const { products } = data || {}

  return (
    <BasicLayout products={products}>
      <ProductsGrid products={products} />
    </BasicLayout>
  )
}
