import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function BasicLayout({ products }) {
  return (
    <>
      <Header products={products} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
