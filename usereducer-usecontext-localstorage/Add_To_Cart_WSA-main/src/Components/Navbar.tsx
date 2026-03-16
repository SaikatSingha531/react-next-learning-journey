import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Hooks/Context/CreateProductContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { productsState } = useContext(ProductContext);

  // UNIQUE items count
  const cartCount = productsState.cartItems.length;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="text-3xl">🍔</span>
          <h1 className="text-3xl font-extrabold tracking-tight text-orange-600">
            Foodify
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          
          {/* Cart Button */}
          <button
            onClick={() => navigate("/cart")}
            className="relative flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold
                       hover:bg-orange-600 active:scale-95 transition-all duration-200"
          >
            <FaShoppingCart className="text-base" />

            <span>Cart</span>

            {/* Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
                               min-w-[20px] h-5 px-1 flex items-center justify-center
                               rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
