// import { useLocation } from '@reach/router';
import React from "react";
import Link from "next/link";
import CartButton from "../CartButton";
import { CartContext } from "@context/CartContext";
import { MENU_ITEMS } from "@constants/menu";
import MenuIcon from "@icons/MenuIcon";
import { siteMeta } from "@constants/config";

// Import this and NextJS will treat it as global css. We cannot use global css in component,
// we can only use module css for component. To use OzMenu.scss, import it in _app.js
// import './OzMenu.scss';

// Animation cho mobile ko dùng được pure CSS, mà phải dùng JS để thêm/xoá các class chứa animation
export const menuToggle = () => {
  const menuDiv = document.querySelector(".ozmenu");
  menuDiv.classList.toggle("active");

  if (!menuDiv.classList.contains("active")) {
    menuDiv.classList.add("inactive");
  } else {
    menuDiv.classList.remove("inactive");
  }
  document.getElementById("menu-overlay").classList.toggle("show");
};

const GenerateMenu = (menuItems) => {
  // const { pathname } = useLocation();
  const pathname = "/"; // todo: remove this line when useLocation is available
  return menuItems.map((item) => {
    const itemClass = item.path === pathname ? " active-menu" : "";
    if (item.path === null) item.path = "#";

    if (item.subItems) {
      return (
        <li key={item.key} className={`${itemClass} item dropdownitem`}>
          <div className="link-wrapper nav-dropdown">
            <Link href={item.path}>{item.name}</Link>
            <button
              className="caret"
              onClick={(e) => {
                e.target.parentNode.classList.toggle("opened");
              }}
              aria-label="Expend child"
            ></button>
          </div>
          <div className="dropdown">
            <ul key={item.key}>{GenerateMenu(item.subItems)}</ul>
          </div>
        </li>
      );
    } else {
      return (
        item.enabled && (
          <li key={item.key} className={`${itemClass} item`} title={item.title ? item.title : ""}>
            <div className="link-wrapper">
              <Link href={item.path}>{item.name}</Link>
            </div>
          </li>
        )
      );
    }
  });
};

/**
 * Ref: https://www.cssscript.com/demo/responsive-multi-level-dropdown-oz-menu/
 */
const OzMenu = ({ showCart = true }) => {
  const { cart } = React.useContext(CartContext);
  const quantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      <div className="ozmenu-container">
        <div className="ozmenu-logo">
          <Link href="/">{siteMeta.name}</Link>
        </div>
        <div className="ozmenu">
          <button className="menu-close" onClick={menuToggle}>
            <span className="close"></span>
          </button>
          <ul className="ozmenu-nav">{GenerateMenu(MENU_ITEMS)}</ul>
        </div>
        <MenuIcon />
        {showCart === true && (
          <div className="cart-wrapper">
            <Link href="/cart">
              <CartButton quantity={quantity} />
            </Link>
          </div>
        )}
      </div>
      <button id="menu-overlay" onClick={menuToggle} aria-label="Open menu"></button>
    </>
  );
};

export default OzMenu;
