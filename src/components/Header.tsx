// Header.tsx
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="w-16 h-16 object-cover rounded-xl shadow-md border border-gray-200 hover:scale-105 transition-transform"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800 tracking-wide">
              Tasty Restaurant
            </p>
            <p className="text-xs text-gray-500">
              Fresh food, fast delivery.
            </p>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="flex-1">
          <ul className="flex items-center justify-end gap-6 text-sm sm:text-base font-medium">
            <li className="hidden md:flex items-center text-gray-600 text-sm">
              <span className="mr-1 font-semibold">Online Status:</span>
              <span className={onlineStatus ? "text-emerald-500" : "text-red-500"}>
                {onlineStatus ? "🟢" : "🔴"}
              </span>
            </li>

            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/About"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/Grocery"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Grocery
              </Link>
            </li>

            <li>
              <Link
                to="/Cart"
                className="relative text-gray-700 hover:text-blue-600 transition-colors"
              >
                Cart
                <span className="ml-1 text-xs text-gray-500">
                  ({cartItems.length} items)
                </span>
              </Link>
            </li>

            {/* LOGIN BUTTON */}
            <button
              className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 active:scale-[0.98] transition-all text-sm"
              onClick={() =>
                setbtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnNameReact}
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
