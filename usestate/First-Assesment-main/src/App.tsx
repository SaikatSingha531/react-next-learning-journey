
import { RouterProvider } from 'react-router-dom'
import './App.css'
// import Navbar from './Components/Navbar'
import Route from './Routes/Route'

function App() {

  return (
    <>
    <RouterProvider router={Route}/>
    </>
  )
}

export default App
