import BookByGenrePagination from "@components/Book/BookByGenrePagination";
import { getAllGenres, getBookByGenreListTotalPages, getGenreData, getPaginatedBooksByGenre } from "@lib/book";

/**
 * Page for displaying a list of books by genre with pagination on the first page.
 * This page is the same as pages/genre/[slug]/page/[num].js
 * The only difference is that this file is used for the first page (page 1)
 * and the other file is used for the rest of the pages (page 2, 3, ...)
 */
export default function BookByGenreListPage({ genre, books, currentPage, totalPages }) {
  return <BookByGenrePagination genre={genre} books={books} currentPage={currentPage} totalPages={totalPages} />;
}

// Generate paths for all genres
export async function getStaticPaths() {
  const genres = getAllGenres();
  const paths = genres.map((genre) => ({
    params: { slug: genre.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const pageNumber = 1;
  const totalPages = getBookByGenreListTotalPages(params.slug);
  const genre = getGenreData(params.slug);
  const books = getPaginatedBooksByGenre(genre.id, 1);
  return {
    props: {
      genre,
      books,
      currentPage: pageNumber,
      totalPages,
    },
  };
}
