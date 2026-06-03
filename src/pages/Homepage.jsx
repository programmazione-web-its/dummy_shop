import { useState, useEffect } from 'react'

import ProductsGrid from '../components/ProductsGrid'

export default function Homepage() {
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true)
      try {
        const res = await fetch('https://dummyjson.com/products')
        if (!res.ok) {
          throw new Error()
        }
        const data = await res.json()
        setProducts(data.products)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    getProducts()
  }, [])

  return (
    <>
      {isLoading ? (
        <div className='h-screen flex items-center justify-center'></div>
      ) : (
        <ProductsGrid products={products} />
      )}
    </>
  )
}
