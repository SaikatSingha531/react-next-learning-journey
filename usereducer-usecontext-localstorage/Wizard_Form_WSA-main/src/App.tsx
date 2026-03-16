import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Routers } from "./Routes/Routes";
import PersonalProvider from "./Hooks/Context/PersonalDetails/PersonalProvider";
import AddressProvider from "./Hooks/Context/AddressDetails/AddressProvider";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <AddressProvider>
        <PersonalProvider>
          <RouterProvider router={Routers} />
        </PersonalProvider>
      </AddressProvider>
    </>
  );
}

export default App;
