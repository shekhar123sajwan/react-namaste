import { useContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  useEffect(() => {
    // console.log("Useeffect called Header");
  }, [btnName]);

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg mb-5 py-2">
      <div className="logo-container">
        <img
          className="w-28"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.jpg"
          alt="logo"
        />
      </div>
      <div>
        <ul className="flex items-center">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>{loggedInUser}</li>
          <li>
            <button
              className="login"
              type="button"
              onClick={() =>
                btnName === "login" ? setBtnName("logout") : setBtnName("login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
