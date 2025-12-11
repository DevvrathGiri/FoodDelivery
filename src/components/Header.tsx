import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useAppSelector } from "../utils/hooks";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const cartItems = useAppSelector((store) => store.cart.items);

  // ⭐ Reset Home Event (Body listens to this)
  const handleHomeClick = () => {
    window.dispatchEvent(new Event("resetHome"));
  };

  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-100 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

        {/* LOGO + title */}
        <div className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="App Logo"
            className="
              w-14 h-14 sm:w-16 sm:h-16
              object-cover rounded-2xl
              shadow-md border border-gray-200
              overflow-hidden bg-white
            "
          />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800 tracking-wide">
              Tasty Restaurant
            </p>
            <p className="text-xs text-gray-500">Fresh food, fast delivery.</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block flex-1">
          <ul className="flex items-center justify-end gap-6 text-sm sm:text-base font-medium">
            <li className="flex items-center text-gray-600 text-sm">
              <span className="mr-1 font-semibold">Online Status:</span>
              <span className={onlineStatus ? "text-emerald-500" : "text-red-500"}>
                {onlineStatus ? "🟢" : "🔴"}
              </span>
            </li>

            {/* ⭐ HOME RESET FIX */}
            <li>
              <Link
                to="/"
                onClick={handleHomeClick}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link to="/About" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/Contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/Grocery" className="text-gray-700 hover:text-blue-600 transition-colors">
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

        {/* Mobile status + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <span className={onlineStatus ? "text-emerald-500 text-lg" : "text-red-500 text-lg"}>
            {onlineStatus ? "🟢" : "🔴"}
          </span>

          <button
            className="p-2 rounded-md border border-gray-200 hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="block w-5 h-[2px] bg-gray-800 mb-1 rounded" />
            <span className="block w-5 h-[2px] bg-gray-800 mb-1 rounded" />
            <span className="block w-5 h-[2px] bg-gray-800 rounded" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
            <ul className="flex flex-col gap-3 text-sm font-medium">

              {/* ⭐ HOME RESET FIX (MOBILE) */}
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleHomeClick();
                  }}
                  className="block py-1 text-gray-700 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/About"
                  className="block py-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/Contact"
                  className="block py-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/Grocery"
                  className="block py-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Grocery
                </Link>
              </li>

              <li>
                <Link
                  to="/Cart"
                  className="block py-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart ({cartItems.length} items)
                </Link>
              </li>

              <li>
                <button
                  className="mt-1 w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 active:scale-[0.98] transition-all text-sm"
                  onClick={() =>
                    setbtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
                  }
                >
                  {btnNameReact}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
