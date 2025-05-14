import Layout from "../../components/layout";
import { getAllGenreSlugs, getGenreData } from "../../lib/book";

export default function GenrePage({ genreData }) {
  return (
    <Layout>
      <h1>{genreData.fullName}</h1>
      <p>{genreData.description}</p>
      <img src={genreData.heroImg} alt={genreData.name} />
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
