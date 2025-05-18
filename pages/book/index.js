import BookPagination from "@components/Book/BookPagination";
import { getBookListTotalPages, getPaginatedBooks } from "@lib/book";

/**
 * Page for displaying a list of books with pagination on the first page.
 * This page is the same as pages/book/page/[num].js
 * The only difference is that this file is used for the first page (page 1)
 * and the other file is used for the rest of the pages (page 2, 3, ...)
 */
export default function BookListPage({ books, currentPage, totalPages }) {
  return <BookPagination books={books} currentPage={currentPage} totalPages={totalPages} />;
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
