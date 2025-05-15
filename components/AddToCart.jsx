import React from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";

export default function AddToCart({ book, available }) {
  const { addBookToCart } = React.useContext(CartContext);

  function addToCart() {
    addBookToCart(book);
  }

  return <Button onClick={addToCart} text={available ? "Thêm vào giỏ" : "Hết hàng 😥"} disabled={!available} />;
}
