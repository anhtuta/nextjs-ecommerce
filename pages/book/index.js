import Layout from "@components/Layout/Layout";
import Pagination from "@components/Pagination";
import BookList from "@components/Book/BookList";
import { PREFIX_URL } from "@constants/constants";
import { getAllBooks } from "../../lib/book";

export default function BookListPage({ allBooks }) {
  const totalPages = 1;
  const currentPage = 1; // TODO: remove this line when using real data
  return (
    <Layout pageTitle="Books">
      <Pagination baseURL={`${PREFIX_URL.product}`} totalPages={totalPages} currentPage={currentPage} />
      <BookList books={allBooks} />
      <Pagination baseURL={`${PREFIX_URL.product}`} totalPages={totalPages} currentPage={currentPage} />
    </Layout>
  );
}

// Fetch books data at build time
export async function getStaticProps() {
  const allBooks = getAllBooks();
  return {
    props: {
      allBooks,
    },
  };
}
