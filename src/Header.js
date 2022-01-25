import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from './logo.png';
import Searchicon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {

  const [{ basket }] = useStateValue();
  console.log(basket);
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={logo}
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <Searchicon className="header_searchIcon"></Searchicon>
      </div>

      <div className="headerNav">
        <Link to="/login" className="header_Link">
          <div className="header_Options">
            <span className="header_optionLineOne">Hello Vikas</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>

        <Link to="/products1" className="header_Link">
          <div className="header_Options">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">&Orders</span>
          </div>
        </Link>

        <Link to="/products2" className="header_Link">
          <div className="header_Options">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_Link">
          <div className="header_OptionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
