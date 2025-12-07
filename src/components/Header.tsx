import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* LOGO */}
      <div className="flex items-center">
        <img
          src={LOGO_URL}
          alt="App Logo"
          className="w-20 h-auto object-contain"
        />
      </div>

      {/* NAV LINKS */}
      <nav>
        <ul className="flex items-center gap-6 text-lg font-medium">
          <li className="text-gray-700">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>

          <li>
            <Link
              to="/home"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/About"
              className="hover:text-blue-600 transition"
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
              className="hover:text-blue-600 transition"
            >
              Contact Us
            </Link>
          </li>

          <li>
            <Link
              to="/Grocery"
              className="hover:text-blue-600 transition"
            >
              Grocery
            </Link>
          </li>

          <li>
            <Link
              to="/Cart"
              className="hover:text-blue-600 transition"
            >
              Cart
            </Link>
          </li>

          {/* LOGIN BUTTON */}
          <button
            className="
              px-4 py-2 
              bg-blue-600 text-white rounded-lg 
              hover:bg-blue-700 
              transition
            "
            onClick={() =>
              setbtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
