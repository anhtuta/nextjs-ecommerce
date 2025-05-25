import React from "react";
import { CartContext } from "../context/CartContext";
import Button from "./Button";
import { useOnlineStatus } from "@hooks/useOnlineStatus";

export default function AddToCart({ book, available }) {
  const { addBookToCart } = React.useContext(CartContext);
  const isOnline = useOnlineStatus();

  function addToCart() {
    addBookToCart(book);
  }

  return (
    <Button
      onClick={addToCart}
      text={!isOnline ? "Reconnecting..." : available ? "Thêm vào giỏ" : "Hết hàng 😥"}
      disabled={!isOnline || !available}
    />
  );
}
