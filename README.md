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

## Pages structure

All pages in the `pages` folder (maybe outdated in the future :D):

#### **Book Pages**

1. **All Books (paginated, first page)**

   - **URL:** `/book`
   - **File:** [pages/book/index.js](pages/book/index.js)

2. **All Books (paginated, for second page and beyond)**

   - **URL:** `/book/page/[num]`
   - **File:** [pages/book/page/[num].js](pages/book/page/[num].js)

3. **Single Book**
   - **URL:** `/book/[slug]`
   - **File:** [pages/book/[slug].js](pages/book/[slug].js)

#### **Genre Pages**

4. **All Genres (NO paginated)**

   - **URL:** `/genre`
   - **File:** [pages/genre/index.js](pages/genre/index.js)

5. **All Books for Single Genre (paginated, first page)**

   - **URL:** `/genre/[slug]`
   - **File:** [pages/genre/[slug]/index.js](pages/genre/[slug]/index.js)

6. **All Books for Single Genre (paginated, for second page and beyond)**
   - **URL:** `/genre/[slug]/page/[num]`
   - **File:** [pages/genre/[slug]/page/[num].js](pages/genre/[slug]/page/[num].js)
