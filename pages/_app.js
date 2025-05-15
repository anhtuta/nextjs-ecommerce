// To load global CSS to your application, create a file called pages/_app.js.
// Then you can add global CSS files by importing them from pages/_app.js.
// You cannot import global CSS anywhere elses
import "../styles/global.css";
import "../styles/style.scss";
import "../styles/style-variables.scss";
import "../components/Layout/FlexRow.scss";
import "../components/Layout/OzMenu.scss";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
