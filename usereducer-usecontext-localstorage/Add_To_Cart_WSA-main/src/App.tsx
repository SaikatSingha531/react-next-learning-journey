import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Routes } from './Routes/Routes'
import ProductsProvider from './Hooks/Context/ProductsProvider'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
    <Toaster position='top-center' richColors/>

    <ProductsProvider>
    <RouterProvider router={Routes}/>
    </ProductsProvider>
    </>
  )
}

export default App
