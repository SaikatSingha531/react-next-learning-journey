import { createBrowserRouter, } from "react-router-dom";
import Blog from "../Pages/Blog";
import BlogDetails from "../Pages/BlogDetails";
// import Author from "../Pages/Author";
import NotFound from "../Components/NotFoundPage";
import Navbar from "../Components/Navbar";
import Wrapper from "../Components/Wrapper";
import { Suspense } from "react";
import Jokes from "../Pages/Jokes";
import WeatherApp from "../Pages/Weather";



const Routing = createBrowserRouter([
    {
        path:"/",
        element:<Navbar/>
    },
    {
        path:"*",
        element:<NotFound/>
    },
    {
        path:"/admin",
        element:<Wrapper/>,
        children:[
            {
                path:"blog",
                element:(
                    <Suspense fallback={<p>Loading,,,</p>}>
                        <Blog/>
                    </Suspense>
                    
                ),
                errorElement:<NotFound/>
            },
            {
                path:"blog/blogdetails/:id",
                element:(
                    <Suspense fallback={<p>Loading,,,</p>}>
                        <BlogDetails/>
                    </Suspense>
                    
                ),
                errorElement:<NotFound/>
            },
            {
                path:"jokes",
                element:(
                    <Suspense fallback={<p>Loading,,,</p>}>
                        <Jokes/>
                    </Suspense>
                    
                ),
                errorElement:<NotFound/>
            },
            {
                path:"weather",
                element:(
                    <Suspense fallback={<p>Loading,,,</p>}>
                        <WeatherApp/>
                    </Suspense>
                    
                ),
                errorElement:<NotFound/>
            }
        ]
    }
])

export default Routing