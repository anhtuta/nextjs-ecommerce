// To load global CSS to your application, create a file called pages/_app.js.
// Then you can add global CSS files by importing them from pages/_app.js.
// You cannot import global CSS anywhere elses
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@context/CartContext";
import "../styles/global.css";
import "../styles/style.scss";
import "../components/Layout/OzMenu.scss";
import "react-toastify/dist/ReactToastify.css";
import "../components/Toast.scss";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </CartProvider>
  );
}
