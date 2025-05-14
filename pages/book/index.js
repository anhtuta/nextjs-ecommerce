import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllBooks } from "../../lib/book";

export default function BookIndex({ allBooks }) {
  return (
    <Layout>
      <Head>
        <title>Books</title>
      </Head>
      <section>
        <h1>Books</h1>
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
