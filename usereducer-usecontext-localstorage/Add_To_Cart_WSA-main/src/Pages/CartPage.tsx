import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Hooks/Context/CreateProductContext";
import { AiOutlineDelete } from "react-icons/ai";


const CartPage = () => {
  const navigate = useNavigate();

  const {
    productsState,
    handleIncrease,
    handleDecrase,
    handleRemove,
    handleClear,
  } = useContext(ProductContext);

  const cartItems = productsState.cartItems;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold mb-8 text-gray-800">
          🍽️ My Cart
        </h1>

        {/* Cart Content */}
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 border-b border-gray-200 pb-6 hover:bg-gray-50 rounded-xl p-4 transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl shadow-md"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="font-semibold text-xl text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-orange-600 font-bold mt-1">
                        ₹{item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => handleDecrase(item)}
                        className="w-9 h-9 border rounded-full text-lg 
                        hover:bg-gray-200 transition active:scale-95"
                      >
                        −
                      </button>

                      <span className="w-10 text-center font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleIncrease(item)}
                        className="w-9 h-9 border rounded-full text-lg 
                        hover:bg-gray-200 transition active:scale-95"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(item)}
                      className="mt-4 text-lg text-red-500 font-medium hover:underline"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total & Remove All */}
            <div className="mt-8 flex justify-between items-center">
              <div className="text-xl font-bold text-gray-800">
                Total:{" "}
                <span className="text-orange-600">
                  ₹{totalPrice}
                </span>
              </div>

              <button
                onClick={() => handleClear()}
                className="px-5 py-2 rounded-full text-white 
                bg-gradient-to-r from-red-500 to-red-600 
                hover:from-red-600 hover:to-red-700 
                transition shadow-md active:scale-95"
              >
                Remove All
              </button>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500 py-16">
            🛒 Your cart is empty
          </div>
        )}

        {/* ALWAYS visible */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white px-8 py-3 rounded-full 
            hover:bg-gray-800 transition shadow-md active:scale-95"
          >
            Go to Shop
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
