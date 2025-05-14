import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import { getAllGenres } from "../../lib/book";

export default function GenreIndex({ allGenres }) {
  return (
    <Layout>
      <Head>
        <title>Genres</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className={utilStyles.headingLg}>Genres</h1>
        <ul className={utilStyles.list}>
          {allGenres.map((genre) => (
            <li className={utilStyles.listItem} key={genre.id}>
              <Link href={`/genre/${genre.slug}`}>{genre.fullName}</Link>
              <p>{genre.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

// Fetch genres data at build time
export async function getStaticProps() {
  const allGenres = getAllGenres();
  return {
    props: {
      allGenres,
    },
  };
}
