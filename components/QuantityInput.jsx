import React from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';
import {
  quantityInput,
  quantityResponsive,
  increment,
  decrement,
  input
} from './QuantityInput.module.scss';

export default function QuantityInput({
  onIncrement,
  onDecrement,
  className = '',
  disabled = false,
  isResponsive = true,
  ...props
}) {
  return (
    <div
      className={[quantityInput, isResponsive ? quantityResponsive : ''].join(
        ' '
      )}
    >
      <input
        disabled={disabled}
        type="numeric"
        className={[input, className].join(' ')} // Hay, đỡ phải dùng `${}`
        {...props} // Hay, input này sẽ lấy các props còn lại của cha: onChange, value, min, max
      />
      <button
        disabled={disabled}
        className={increment}
        aria-label="Increment"
        onClick={onIncrement}
      >
        <span>+</span>
        <MdArrowDropUp />
      </button>
      <button
        disabled={disabled}
        className={decrement}
        aria-label="Decrement"
        onClick={onDecrement}
      >
        <span>-</span>
        <MdArrowDropDown />
      </button>
    </div>
  );
}
