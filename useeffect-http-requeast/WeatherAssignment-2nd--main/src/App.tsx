

import { RouterProvider } from "react-router-dom";
import Routing from "./Routes/Routing";


function App() {
  return (
    <>
      <RouterProvider router={Routing}/>
    </>
  );
}

export default App;
