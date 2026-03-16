import { createBrowserRouter } from "react-router-dom";
import PersonalInfo from "../Pages/PersonalInfo";
import Preview from "../Pages/Preview";
import AddressInfo from "../Pages/AddressInfo";

export const Routers = createBrowserRouter([
    {
        path:"/",
        element:<PersonalInfo/>
    },
    {
        path:"/addressinfo",
        element:<AddressInfo/>
    },
    {
        path:"/preview",
        element:<Preview/>
    }
])