import React from "react";
import OzMenu from "./OzMenu";
import Footer from "./Footer";
import Loading from "@components/Loading";
import { CartContext } from "@context/CartContext";
import { siteMeta } from "@constants/config";
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
import Head from "next/head";

/**
 * heroImage: component chứa hero image
 * heroImageUrl: chỉ là url, component này sẽ tạo container chứa hero image
 * Chỉ nên dùng 1 trong 2 thuộc tính trên
 */
const Layout = ({ pageTitle, children, heroImage, heroImageUrl, heroImageUrlAlt, showRightSidebar = false }) => {
  const { loading } = React.useContext(CartContext);
  return (
    <div className={`${layoutWrapper + " " + montserrat.className}`}>
      <Head>
        <title>{pageTitle || siteMeta.name}</title>
      </Head>
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
      <Loading show={loading} />
    </div>
  );
};

export default Layout;
