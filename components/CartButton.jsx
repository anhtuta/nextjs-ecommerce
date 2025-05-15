import React from 'react';
import CartIcon from '../icons/CartIcon';
import { cartButton, badge } from './CartButton.module.scss';

/**
 * Không hiểu tại sao nếu bỏ 2 ký tự &nbsp; đi thì cái thẻ li ở bên Nav
 * (là cha của component này) lại bị lỗi CSS: nó bị cao hơn so với
 * các thẻ li khác!
 * TODO: Fix this issue!
 */
export default function CartButton({ quantity }) {
  return (
    <span className={cartButton}>
      &nbsp;
      <CartIcon />
      {quantity > 0 && <div className={badge}>{quantity}</div>}
      &nbsp;
    </span>
  );
}
