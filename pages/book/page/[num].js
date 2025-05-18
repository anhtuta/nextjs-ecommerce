import Layout from "@components/Layout/Layout";
import Pagination from "@components/Pagination";
import BookList from "@components/Book/BookList";
import { PREFIX_URL } from "@constants/constants";
import { getBookListTotalPages, getPaginatedBooks } from "@lib/book";

/**
 * Page for displaying a list of books with pagination, starting from page 2.
 */
export default function BookListPage2({ books, currentPage, totalPages }) {
  return (
    <Layout pageTitle="Books">
      <Pagination baseURL={`${PREFIX_URL.book}`} totalPages={totalPages} currentPage={currentPage} />
      <BookList books={books} />
      <Pagination baseURL={`${PREFIX_URL.book}`} totalPages={totalPages} currentPage={currentPage} />
    </Layout>
  );
}

// Generate paths for all page numbers
export async function getStaticPaths() {
  const totalPages = getBookListTotalPages();
  const paths = [];

  for (let i = 2; i <= totalPages; i++) {
    paths.push({
      params: { num: i.toString() },
    });
  }

  return { paths, fallback: false };
}

// Generate props for each book list page
export async function getStaticProps({ params }) {
  const pageNumber = parseInt(params.num, 10);
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
