import { createBrowserRouter } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import Outlet from "./Outlet";


export const Routes = createBrowserRouter([
  {
    path: "/",
    element:<Outlet/>,
  },
  {
    path:"/cart",
    element:<CartPage/>
  }
]);