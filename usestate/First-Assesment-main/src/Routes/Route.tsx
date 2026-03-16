// import React from 'react'

import { createBrowserRouter } from "react-router-dom"
import Navbar from "../Components/Navbar"
import ToDolist from "../Pages/ToDolist"
import Stopwatch from "../Pages/Stopwatch"

const Route = createBrowserRouter([
    {
        path:"/",
        element:<Navbar/>
    },
    {
        path:"/todo",
        element:<><Navbar/><ToDolist/></>,
    },
    {
        path:"/watch",
        element:<><Navbar/><Stopwatch/></>
    }
])

export default Route