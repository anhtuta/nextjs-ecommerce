import Layout from "@components/Layout/Layout";
import Pagination from "@components/Pagination";
import BookList from "@components/Book/BookList";
import { PREFIX_URL } from "@constants/constants";

export default function BookPagination({ books, currentPage, totalPages }) {
  return (
    <Layout pageTitle="Books">
      <Pagination baseURL={`${PREFIX_URL.book}`} totalPages={totalPages} currentPage={currentPage} scroll={false} />
      <BookList books={books} />
      <Pagination baseURL={`${PREFIX_URL.book}`} totalPages={totalPages} currentPage={currentPage} />
    </Layout>
  );
}
