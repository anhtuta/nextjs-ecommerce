import fs from "fs";
import path from "path";

const PAGE_SIZE = 24; // Number of items per page
const jsonDirectory = path.join(process.cwd(), "json");

let genreCache: Genre[] | null = null; // Cache to store the parsed genre data
let bookCache: Book[] | null = null; // Cache to store the parsed book data

export interface Genre {
  id: number;
  name: string;
  fullName?: string;
  description?: string;
  heroImg?: string;
  slug: string;
}

export interface Book {
  id: number;
  name: string;
  description?: string;
  categoryId: number;
  slug: string;
  sku?: string;
  heroImg?: string;
  image?: string[];
  price?: number;
  originalPrice?: number;
  quantity?: number;
  color?: string;
}

// Function to get all genres from genre.json
export function getAllGenres(): Genre[] {
  if (!genreCache) {
    const genreFilePath = path.join(jsonDirectory, "genre.json");
    const genreData = fs.readFileSync(genreFilePath, "utf-8");
    genreCache = JSON.parse(genreData) as Genre[]; // Cache the parsed data
  }
  return genreCache;
}

// Function to get all books from book.json
export function getAllBooks(): Book[] {
  if (!bookCache) {
    const bookFilePath = path.join(jsonDirectory, "book.json");
    const bookData = fs.readFileSync(bookFilePath, "utf-8");
    bookCache = JSON.parse(bookData) as Book[]; // Cache the parsed data
  }
  return bookCache;
}

// Function to get all genre slugs for dynamic page generation
export function getAllGenreSlugs(): { params: { slug: string } }[] {
  const genres = getAllGenres();
  return genres.map((genre) => ({
    params: {
      slug: genre.slug,
    },
  }));
}

// Function to get data for a specific genre by slug, including its books
export function getGenreData(slug: string): Genre & { books: Book[] } {
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
export function getAllBookSlugs(): { params: { slug: string } }[] {
  const books = getAllBooks();
  return books.map((book) => ({
    params: {
      slug: book.slug,
    },
  }));
}

// Function to get data for a specific book by slug, including its genre
export function getBookData(slug: string): Book & { genre: Genre } {
  const books = getAllBooks();
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    throw new Error(`Book with slug "${slug}" not found`);
  }

  // Get all genres
  const genres = getAllGenres();

  // Find the category (genre) for the book
  const genre = genres.find((genre) => genre.id === book.categoryId);

  if (!genre) {
    throw new Error(`Genre with ID "${book.categoryId}" not found for book "${slug}"`);
  }

  return {
    ...book,
    genre, // Add the category (genre) to the book data
  };
}