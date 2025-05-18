import Layout from "@components/Layout/Layout";
import Pagination from "@components/Pagination";
import BookList from "@components/Book/BookList";
import { PREFIX_URL } from "@constants/constants";

export default function BookByGenrePagination({ genre, books, currentPage, totalPages }) {
  return (
    <Layout pageTitle={genre.fullName}>
      <p>{genre.description}</p>
      <Pagination baseURL={`${PREFIX_URL.genre}/${genre.slug}`} totalPages={totalPages} currentPage={currentPage} />
      <BookList books={books} />
      <Pagination baseURL={`${PREFIX_URL.genre}/${genre.slug}`} totalPages={totalPages} currentPage={currentPage} />
    </Layout>
  );
}
