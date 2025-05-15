import React from "react";
// import { ToastContainer } from 'react-toastify';
import OzMenu from "./OzMenu";
// import SiteTitle from "./SiteTitle";
import Footer from "./Footer";
import Loading from "../Loading";
// import { CartContext } from '../../context/CartContext';
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
  // const { loading } = React.useContext(CartContext);
  const loading = false; // todo: remove this line when CartContext is available
  return (
    <div className={`${layoutWrapper} layout-container`}>
      {/* <SiteTitle /> */}
      <OzMenu showCart={false} />
      {heroImage}
      {heroImageUrl && (
        <div className={heroWrapper}>
          <img src={heroImageUrl} alt={heroImageUrlAlt} />
        </div>
      )}
      <div className={contentWrapper}>
        <main className={`${siteContent} ${showRightSidebar ? leftContent : fullContent}`}>
          {pageTitle && <h1 className={heading}>{pageTitle}</h1>}
          {children}
        </main>
        {showRightSidebar && (
          <div className={rightSidebar}>{/* <RightSidebar /> */} Right Sidebar has been removed</div>
        )}
      </div>
      <Footer />
      <Loading show={loading} />
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Layout;
