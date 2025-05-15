import React from 'react';
import { menuToggle } from '../components/Layout/OzMenu';
import menuButton from './svg/menu-button.svg';

/**
 * CSS for this button is in OzMenu.scss
 */
export default function MenuIcon() {
  return (
    <button className="menu-open" onClick={menuToggle}>
      {/* <span className="open"></span> */}
      <img src={menuButton} alt="Menu button" />
    </button>
  );
}
