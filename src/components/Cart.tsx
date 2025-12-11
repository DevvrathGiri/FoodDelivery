import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import type { RootState } from "../utils/appStore";

const Cart = () => {
  const cartItems = useSelector((store: RootState) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 border border-gray-200">

        {/* Clear Cart Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Items</h2>

          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg shadow hover:bg-red-600 transition-all"
          >
            Clear Cart
          </button>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 && (
          <p className="text-center text-gray-500 py-10 text-lg">
            Your cart is empty 😕  
          </p>
        )}

        {/* Cart Items */}
        <ItemList items={cartItems} isCart={true} />
      </div>
    </div>
  );
};

export default Cart;
