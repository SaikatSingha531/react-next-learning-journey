import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import ProductsPage from "../Pages/ProductsPage"

const Outlet = () => {
  return (
    <>
    <Navbar/>
    <ProductsPage/>
    <Footer/>
    </>
  )
}

export default Outlet