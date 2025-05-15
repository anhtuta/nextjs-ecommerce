import React from "react";
import { ToastContainer } from "react-toastify";
import OzMenu from "./OzMenu";
import Footer from "./Footer";
import CartLoading from "@components/CartLoading";
import { CartProvider } from "@context/CartContext";
import { montserrat, lora } from "@constants/font";
import {
  layoutWrapper,
  contentWrapper,
  heroWrapper,
  heading,
  siteContent,
  fullContent,
  leftContent,
  rightSidebar,
} from "./Layout.module.scss";
import "font-awesome/css/font-awesome.min.css";

/**
 * heroImage: component chứa hero image
 * heroImageUrl: chỉ là url, component này sẽ tạo container chứa hero image
 * Chỉ nên dùng 1 trong 2 thuộc tính trên
 */
const Layout = ({ pageTitle, children, heroImage, heroImageUrl, heroImageUrlAlt, showRightSidebar = false }) => {
  // const { loading } = React.useContext(CartContext); // cannot use useContext outside of CartProvider --> Use CartLoading instead
  return (
    <CartProvider>
      <div className={`${layoutWrapper + " " + montserrat.className} layout-container`}>
        <OzMenu showCart={true} />
        {heroImage}
        {heroImageUrl && (
          <div className={heroWrapper}>
            <img src={heroImageUrl} alt={heroImageUrlAlt} />
          </div>
        )}
        <div className={contentWrapper}>
          <main className={`${siteContent} ${showRightSidebar ? leftContent : fullContent}`}>
            {pageTitle && <h1 className={heading + " " + lora.className}>{pageTitle}</h1>}
            {children}
          </main>
          {showRightSidebar && <div className={rightSidebar}>Right Sidebar has been removed</div>}
        </div>
        <Footer />
        <CartLoading />
        <ToastContainer />
      </div>
    </CartProvider>
  );
};

export default Layout;
