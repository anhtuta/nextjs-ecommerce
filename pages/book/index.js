import Layout from "@components/Layout/Layout";
import Pagination from "@components/Pagination";
import BookList from "@components/Book/BookList";
import { PREFIX_URL } from "@constants/constants";
import { getBookListTotalPages, getPaginatedBooks } from "@lib/book";

/**
 * Page for displaying a list of books with pagination on the first page.
 * This page is the same as pages/book/page/[num].js
 * The only difference is that this file is used for the first page (page 1)
 * and the other file is used for the rest of the pages (page 2, 3, ...)
 */
export default function BookListPage({ books, currentPage, totalPages }) {
  return (
    <Layout pageTitle="Books">
      <Pagination baseURL={`${PREFIX_URL.book}`} totalPages={totalPages} currentPage={currentPage} />
      <BookList books={books} />
      <Pagination baseURL={`${PREFIX_URL.book}`} totalPages={totalPages} currentPage={currentPage} />
    </Layout>
  );
}

// Generate props for each page
export async function getStaticProps({ params }) {
  const pageNumber = 1;
  const totalPages = getBookListTotalPages();
  const books = getPaginatedBooks(pageNumber);
  return {
    props: {
      books,
      currentPage: pageNumber,
      totalPages,
    },
  };
}
