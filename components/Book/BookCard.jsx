import React from "react";
import Link from "next/link";
import {
  bookCard,
  bookCardTablet,
  bookType,
  bookImageWrapper,
  bookInfo,
  bookTitle,
  bookPrice,
} from "./BookCard.module.scss";

const BookCard = ({ type, title, url, heroImg, imageAlt, price, noTablet = false }) => {
  return (
    <Link href={url} className={`${bookCard} ${noTablet === true ? "" : bookCardTablet}`} title={title}>
      {type && <div className={bookType}>{type}</div>}
      <div className={bookImageWrapper}>
        <img src={heroImg} alt={imageAlt ? imageAlt : "Photo of " + title} loading="lazy" />
      </div>
      <div className={bookInfo}>
        <div className={bookTitle}>{title}</div>
        <div className={bookPrice}>
          {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price)}
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
