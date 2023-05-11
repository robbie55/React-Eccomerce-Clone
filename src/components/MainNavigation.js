import NavSearch from "./NavSearch";

import classes from "./MainNavigation.module.css";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.navSection}>
        <h1>eShop</h1>
        <span>
          <NavLink className={classes.navLink} to="/">
            <StorefrontIcon />
          </NavLink>
        </span>
      </div>
      <div className={classes.navSearch}>
        <NavSearch />
      </div>
      <div className={classes.navCart}>
        <span>Your Shop</span>
        <span>
          <NavLink className={classes.navLink} to="/cart">
            {" "}
            <ShoppingBasketIcon />
          </NavLink>
        </span>
      </div>
    </nav>
  );
};

export default MainNavigation;
