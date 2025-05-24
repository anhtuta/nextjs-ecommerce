import Layout from "@components/Layout/Layout";
import Pagination from "@components/Pagination";
import BookList from "@components/Book/BookList";
import { PREFIX_URL } from "@constants/constants";

/**
 * Component for displaying a list of books by genre with pagination.
 * Using `dangerouslySetInnerHTML` to render raw HTML content in React.
 * Why "Dangerous"?: Because it bypasses React's built-in protection against XSS (Cross-Site Scripting) attacks.
 * Ensure that the HTML content in genre.description is sanitized before rendering
 */
export default function BookByGenrePagination({ genre, books, currentPage, totalPages }) {
  return (
    <Layout pageTitle={genre.fullName}>
      <div style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: genre.description }} />
      <Pagination
        baseURL={`${PREFIX_URL.genre}/${genre.slug}`}
        totalPages={totalPages}
        currentPage={currentPage}
        scroll={false}
      />
      <BookList books={books} />
      <Pagination baseURL={`${PREFIX_URL.genre}/${genre.slug}`} totalPages={totalPages} currentPage={currentPage} />
    </Layout>
  );
}
