import Head from "next/head";
import Link from "next/link";
import { lora } from "../../constants/font";
import Layout from "../../components/Layout/Layout";
import { getAllGenreSlugs, getGenreData } from "../../lib/book";

export default function GenrePage({ genreData }) {
  return (
    <Layout pageTitle={genreData.fullName}>
      <Head>
        <title>{genreData.fullName}</title>
      </Head>
      <p>{genreData.description}</p>
      <img src={genreData.heroImg} alt={genreData.name} />
      <h2>Books in {genreData.fullName}</h2>
      <ul>
        {genreData.books.map((book) => (
          <li key={book.id}>
            <Link className={lora.className} href={`/book/${book.slug}`}>
              {book.name}
            </Link>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

// Generate paths for all genres
export async function getStaticPaths() {
  const paths = getAllGenreSlugs();
  return {
    paths,
    fallback: false,
  };
}

// Fetch data for a specific genre
export async function getStaticProps({ params }) {
  const genreData = getGenreData(params.slug);
  return {
    props: {
      genreData,
    },
  };
}
