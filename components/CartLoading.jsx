import React from "react";
import Loading from "./Loading";
import { CartContext } from "@context/CartContext";

export default function CartLoading() {
  const { loading } = React.useContext(CartContext);
  return <Loading show={loading} />;
}
