import ProductCard from './ProductCard'
export default function ProductsGrid({ products }) {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12'>
      {products ? (
        products.map((prod) => <ProductCard product={prod} />)
      ) : (
        <div className='col-span-1 md:col-span-2 lg:col-span-4 my-20 text-center'>
          <p className='text-2xl'>Sorry, no product was found.</p>
        </div>
      )}
    </div>
  )
}
