import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Cart">Cart</Link>
          </li>
          {/* <button
            className="login"
            onClick={() => {
              if (btnNameReact === "Login") {
                setbtnNameReact("Logout");
              } else {
                setbtnNameReact("Login");
              }
            }}
          >
            {btnNameReact}
          </button> */}
          <button
            className="login"
            onClick={() =>
              setbtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
