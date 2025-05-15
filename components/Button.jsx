import React from 'react';
import { btn } from './Button.module.scss';

export default function Button(props) {
  const { text, onClick, disabled = false } = props;
  function handleOnClick(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <button
      type="submit"
      className={btn}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
