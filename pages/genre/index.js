import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import utilStyles from "../../styles/utils.module.css";
import { getAllGenres } from "../../lib/book";

export default function GenreListPage({ allGenres }) {
  return (
    <Layout pageTitle="Genres">
      <section className={utilStyles.headingMd}>
        <ul className={utilStyles.list}>
          {allGenres.map((genre, index) => (
            <li className={utilStyles.listItem} key={genre.id}>
              <Link href={`/genre/${genre.slug}`} className={utilStyles.listItemTitle}>
                {index + 1}. {genre.fullName}
              </Link>
              <p dangerouslySetInnerHTML={{ __html: genre.description }} />
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
