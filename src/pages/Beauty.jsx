import data from '../data/products.json'

import BasicLayout from '../layouts/BasicLayout'
import ProductsGrid from '../components/ProductsGrid'

export default function Beauty() {
  const { products } = data || {}

  const beautyProducts = products?.filter((el) => el.category === 'beauty')

  return (
    <BasicLayout products={beautyProducts}>
      <ProductsGrid products={beautyProducts} />
    </BasicLayout>
  )
}
