import React from "react";
import BookCard from "./BookCard";
import { PREFIX_URL } from "@constants/constants";
import { bookList, bookListTablet } from "./BookList.module.scss";

const BookList = ({ books = [], noTablet = false }) => {
  if (books.length === 0) return <div>Hiện tại chưa có sản phẩm nào</div>;
  return (
    <div className={`${bookList} ${noTablet === true ? "" : bookListTablet}`}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.name}
          url={`${PREFIX_URL.book}/${book.slug}`}
          heroImg={book.heroImg}
          price={book.price}
        />
      ))}
    </div>
  );
};

export default BookList;
