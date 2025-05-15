import Image from "next/image";
import { menuToggle } from "../components/Layout/OzMenu";
import menuButton from "./svg/menu-button.svg";

/**
 * CSS for this button is in OzMenu.scss
 */
export default function MenuIcon() {
  return (
    <button className="menu-open" onClick={menuToggle}>
      <Image priority src={menuButton} alt="Menu button" />
    </button>
  );
}
