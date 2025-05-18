import BookByGenrePagination from "@components/Book/BookByGenrePagination";
import { getAllGenres, getBookByGenreListTotalPages, getGenreData, getPaginatedBooksByGenre } from "@lib/book";

/**
 * Page for displaying a list of books by genre with pagination, starting from page 2.
 */
export default function BookByGenreListPage2({ genre, books, currentPage, totalPages }) {
  return <BookByGenrePagination genre={genre} books={books} currentPage={currentPage} totalPages={totalPages} />;
}

// Generate paths for all genres
export async function getStaticPaths() {
  const genres = getAllGenres();
  const paths = [];
  genres.forEach((genre) => {
    const totalPages = getBookByGenreListTotalPages(genre.slug);
    for (let i = 2; i <= totalPages; i++) {
      paths.push({
        // Must return params: slug and num, as this file is in the path /genre/[slug]/page/[num].js
        params: { slug: genre.slug, num: i.toString() },
      });
    }
  });
  return { paths, fallback: false };
}

// Generate props for each genre list page
// Data of params is passed from getStaticPaths
export async function getStaticProps({ params }) {
  const pageNumber = parseInt(params.num, 10);
  const totalPages = getBookByGenreListTotalPages(params.slug);
  const genre = getGenreData(params.slug);
  const books = getPaginatedBooksByGenre(genre.id, pageNumber);
  return {
    props: {
      genre,
      books,
      currentPage: pageNumber,
      totalPages,
    },
  };
}
