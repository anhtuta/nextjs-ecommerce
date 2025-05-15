import fs from "fs";
import path from "path";

const PAGE_SIZE = 24; // Number of items per page
const jsonDirectory = path.join(process.cwd(), "json");

let genreCache = null; // Cache to store the parsed genre data
let bookCache = null; // Cache to store the parsed book data

// Function to get all genres from genre.json
export function getAllGenres() {
  if (!genreCache) {
    const genreFilePath = path.join(jsonDirectory, "genre.json");
    const genreData = fs.readFileSync(genreFilePath, "utf-8");
    genreCache = JSON.parse(genreData); // Cache the parsed data
  }
  return genreCache;
}

// Function to get all books from book.json
export function getAllBooks() {
  if (!bookCache) {
    const bookFilePath = path.join(jsonDirectory, "book.json");
    const bookData = fs.readFileSync(bookFilePath, "utf-8");
    bookCache = JSON.parse(bookData); // Cache the parsed data
  }
  return bookCache;
}

// Function to get all genre slugs for dynamic page generation
export function getAllGenreSlugs() {
  const genres = getAllGenres();
  return genres.map((genre) => ({
    params: {
      slug: genre.slug,
    },
  }));
}

// Function to get data for a specific genre by slug, including its books
export function getGenreData(slug) {
  const genres = getAllGenres();
  const genre = genres.find((cat) => cat.slug === slug);

  if (!genre) {
    throw new Error(`Genre with slug "${slug}" not found`);
  }

  // Get all books
  const books = getAllBooks();

  // Filter books that belong to the current genre
  const booksInGenre = books.filter((book) => book.categoryId === genre.id);

  return {
    ...genre,
    books: booksInGenre, // Add books to the genre data
  };
}

// Function to get all book slugs for dynamic page generation
export function getAllBookSlugs() {
  const books = getAllBooks();
  return books.map((book) => ({
    params: {
      slug: book.slug,
    },
  }));
}

// Function to get data for a specific book by slug
export function getBookData(slug) {
  const books = getAllBooks();
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    throw new Error(`Book with slug "${slug}" not found`);
  }

  return book;
}
