import React, { useState } from "react";
import Link from "next/link";
import { PREFIX_URL } from "@constants/constants";
import Layout from "@components/Layout/Layout";
import QuantityInput from "@components/QuantityInput";
import AddToCart from "@components/AddToCart";
import { getAllBookSlugs, getBookData } from "@lib/book";
import {
  bookWrapper,
  bookImages,
  slider,
  slideItem,
  selectedImage,
  thumbnailWrapper,
  thumbnailItem,
  activeThumbnail,
  thumbnail,
  bookInfo,
  breadcrumb,
  bookDescription,
  bookPrice,
  bookOriginalPrice,
  addToCartWrapper,
} from "@styles/BookItem.module.scss";

export default function BookItem({ bookData }) {
  const [activeImage, setActiveImage] = useState("value0");
  const [quantity, setQuantity] = React.useState(1);
  const selectedBook = {
    id: bookData.id,
    name: bookData.name,
    slug: bookData.slug,
    heroImg: bookData.heroImg,
    price: bookData.price,
    quantity,
  };
  return (
    <Layout pageTitle={bookData.name}>
      <div className={bookWrapper}>
        <div className={bookImages}>
          <div className={slider}>
            {bookData.images.map((item, index) => {
              return (
                <div className={slideItem} key={item}>
                  <input
                    checked={activeImage === `value${index}`}
                    id={`id${index}`}
                    value={`value${index}`}
                    name="ani"
                    type="radio"
                    onChange={(e) => setActiveImage(e.target.value)}
                  />
                  <img
                    className={selectedImage}
                    src={item}
                    alt={`${bookData.name || bookData.title} ${index}`}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
          <div className={thumbnailWrapper}>
            {bookData.images.map((item, index) => {
              return (
                <div
                  className={`${thumbnailItem} ${activeImage === `value${index}` ? activeThumbnail : ""}`}
                  key={item}
                >
                  <label htmlFor={`id${index}`}>
                    <img
                      className={thumbnail}
                      src={item}
                      width="100"
                      alt={`${bookData.name || bookData.title} ${index} thumbnail`}
                      loading="lazy"
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div className={bookInfo}>
          <div className={breadcrumb}>
            <Link href={`${PREFIX_URL.book}`}>Book</Link>
            &nbsp;<i className="fa fa-angle-right" aria-hidden="true"></i>&nbsp;
            <Link href={`${PREFIX_URL.genre}/${bookData.genre.slug}`}>{bookData.genre.name}</Link>
          </div>
          <p className={bookDescription}>{bookData.description}</p>
          <div className={bookPrice}>{bookData.price.toLocaleString("vi-VN")} ₫</div>
          <div className={bookOriginalPrice}>{bookData.originalPrice.toLocaleString("vi-VN")} ₫</div>
          <div className={addToCartWrapper}>
            <QuantityInput
              onIncrement={() => setQuantity((q) => Math.min(q + 1, bookData.quantity))}
              onDecrement={() => setQuantity((q) => Math.max(1, q - 1))}
              onChange={(event) => setQuantity(event.currentTarget.value)}
              value={quantity}
              min="1"
              max="20"
            />
            <AddToCart book={selectedBook} available={bookData.quantity > 0} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Generate paths for all books
export async function getStaticPaths() {
  const paths = getAllBookSlugs();
  return {
    paths,
    fallback: false,
  };
}

// Fetch data for a specific book
export async function getStaticProps({ params }) {
  const bookData = getBookData(params.slug);
  return {
    props: {
      bookData,
    },
  };
}
