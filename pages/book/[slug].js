import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import { getAllBookSlugs, getBookData } from "../../lib/book";

export default function BookPage({ bookData }) {
  return (
    <Layout pageTitle={bookData.name}>
      <Head>
        <title>{bookData.name}</title>
      </Head>
      <p>{bookData.description}</p>
      <img src={bookData.heroImg} alt={bookData.name} />
    </Layout>
  );
}

// Generate paths for all books
export async function getStaticPaths() {
  const paths = getAllBookSlugs();
  return {
    paths,
    fallback: false,
  };
}

// Fetch data for a specific book
export async function getStaticProps({ params }) {
  const bookData = getBookData(params.slug);
  return {
    props: {
      bookData,
    },
  };
}
