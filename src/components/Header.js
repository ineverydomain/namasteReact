import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = cartItems.reduce(
    (acc, curr) => acc + (curr.quantity || 1),
    0,
  );

  return (
    <div className="flex justify-between rounded-2xl m-2 shadow-2xl bg-orange-300 ">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">Online:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4">
            <Link to="/cart">Cart ({totalQuantity})</Link>
          </li>
          {/* <li className="px-4">Cart ({cartItems.length} items)</li> */}
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"); 
            }}
          >
            {btnName}
          </button>
          <div className="p-2">{loggedInUser}</div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
