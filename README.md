# Nextjs e-commerce

NextJS e-commerce example

Requires: NodeJS >= v22.15.0

## URL Design

| Page Type                | URL Structure                                | Example URL                               |
| ------------------------ | -------------------------------------------- | ----------------------------------------- |
| All Books (Paginated)    | `/book` and `/book/page/[n]`                 | `/book`, `/book/page/2`                   |
| Single Book              | `/book/[slug]`                               | `/book/the-great-gatsby`                  |
| All Genres (Paginated)   | `/genre` and `/genre/page/[n]`               | `/genre`, `/genre/page/2`                 |
| Single Genre (Paginated) | `/genre/[slug]` and `/genre/[slug]/page/[n]` | `/genre/fiction`, `/genre/fiction/page/2` |

I don't want to use plural, as in my native language (Vietnamese), we don't have plural form
