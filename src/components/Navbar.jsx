import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
// ❌ remove href import
import { Link } from "react-router-dom"; // ✅ if you want routing
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" height="50px" />
        <p>Shopify</p>
      </div>

      <ul className="navmenu">
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: "none", color:"#626262" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: "none" , color:"#626262" }} to="/men">
            Men
          </Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: "none" , color:"#626262" }} to="/women">
            Women
          </Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kid")}>
          <Link style={{ textDecoration: "none" , color:"#626262" }} to="/kid">
            Kids
          </Link>
          {menu === "kid" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" height="40px" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
