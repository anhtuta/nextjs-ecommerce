import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { getAllBooks } from "../../lib/book";

export default function BookIndex({ allBooks }) {
  return (
    <Layout pageTitle="Books">
      <Head>
        <title>Books</title>
      </Head>
      <section>
        <ul>
          {allBooks.map((book) => (
            <li key={book.id}>
              <Link href={`/book/${book.slug}`}>{book.name}</Link>
              <p>{book.description}</p>
            </li>
          ))}
        </ul>
      </section>
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
