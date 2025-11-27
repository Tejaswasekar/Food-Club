import { useState } from "react";
import { CDN_LOGO_URL } from "../utils/constants";

let Header = () => {
  let [btnName, setbtnName] = useState(["login"]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
