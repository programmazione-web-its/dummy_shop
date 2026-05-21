import Header from '../components/Header'
import Footer from '../components/Footer'
export default function BasicLayout({ children, products }) {
  return (
    <>
      <Header products={products} />
      {children}
      <Footer />
    </>
  )
}
