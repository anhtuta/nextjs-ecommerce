import React, { useState, useEffect } from "react";
import Toast from "@lib/toast";

const CART_NAME = "tzk_bookstore_cart";
const defaultValues = {
  cart: [],
  loading: false,
  setLoading: () => {},
  addBookToCart: () => {},
  removeBookFromCart: () => {},
  emptyCart: () => {},
  isCartEmpty: () => {},
};

// Note: đây là context chứa data mọi chung của cả app, chứ ko chỉ riêng về cart.
// Hiện tại có data loading, cart, sau này có thể thêm "theme"
// (Các data thường sẽ là state của component CartProvider)
export const CartContext = React.createContext(defaultValues);

export const CartProvider = ({ children }) => {
  // Data context này sẽ có 1 biến là cart, dùng để lưu các sản phẩm
  // của user đã thêm vào giỏ hàng. Do cart có thể thay đổi nên ta sẽ
  // lưu cart là 1 state của component này
  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(false);

  // Update cart from local storage
  useEffect(() => {
    const storedCart = localStorage.getItem(CART_NAME);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart([]);
    }
  }, []); // similar to componentDidMount

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const fakeLoading = async (ms) => {
    setLoading(true);
    await sleep(ms);
    setLoading(false);
  };

  /**
   * Thêm sản phẩm vào cart
   * @param {JSON} book data, bắt buộc phải có { id, quantity }
   * @param {boolean} isAddNew nếu = true thì sẽ ko cộng dồn cùng với quantity trước đó
   */
  const addBookToCart = async (book, isAddNew = false) => {
    console.log("addBookToCart", book);
    const { id, name, slug, heroImg, price, quantity } = book;
    const newCart = [...cart];
    let isItemExist = false;
    newCart.forEach((item) => {
      if (item.id === id) {
        if (isAddNew) item.quantity = quantity;
        else item.quantity += quantity;
        isItemExist = true;
      }
    });
    if (!isItemExist) {
      newCart.push({
        id,
        name,
        slug,
        heroImg,
        price,
        quantity,
      });
    }
    await updateAndSaveCart(newCart);
    Toast.success(quantity > 0 ? "Đã thêm" : "Đã xóa");
  };

  const removeBookFromCart = async (bookId) => {
    const newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === bookId) {
        newCart.splice(i, 1);
        break;
      }
    }
    await updateAndSaveCart(newCart);
    Toast.success("Đã xóa!");
  };

  const emptyCart = async () => {
    await fakeLoading(1000);
    await updateAndSaveCart([]);
    Toast.success("Thành công!");
  };

  const isCartEmpty = () => {
    return !cart || cart.length === 0;
  };

  const updateAndSaveCart = async (newCart) => {
    await fakeLoading(1000);
    setCart(newCart);
    localStorage.setItem(CART_NAME, JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        setLoading,
        addBookToCart,
        removeBookFromCart,
        emptyCart,
        isCartEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
