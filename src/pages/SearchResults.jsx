import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import ProductsGrid from '../components/ProductsGrid'

export default function SearchResults() {
  const location = useLocation()
  const query = new URLSearchParams(location.search)
  const term = query.get('q') || ''

  const [products, setProducts] = useState()

  useEffect(() => {
    if (!term) return
    async function getProducts() {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${term}`,
        )
        if (!res.ok) {
          throw new Error()
        }

        const data = await res.json()
        setProducts(data.products)
      } catch (err) {
        console.error(err)
      }
    }

    getProducts()
  }, [term])

  return (
    <div>
      <h1>Risultati di ricerca per: {term}</h1>
      <ProductsGrid products={products} />
    </div>
  )
}
