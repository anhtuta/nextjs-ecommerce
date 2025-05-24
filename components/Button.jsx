import React from "react";
import { btn } from "./Button.module.scss";

export default function Button({ text, className = "", onClick, disabled = false }) {
  function handleOnClick(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <button type="submit" className={btn + " " + className} onClick={handleOnClick} disabled={disabled}>
      {text}
    </button>
  );
}
