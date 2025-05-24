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

## Server-side Rendering (SSR)

To use SSR, we must disable static export in [next.config.js](./next.config.js), as this feature requires a NodeJS server

Tức là để dùng SSR ta cần 1 NodeJS server chứ không chỉ đơn thuần là static web server nữa, để nó có thể fetch data (từ DB hoặc 1 server API khác)

Nhận xét:

- Mỗi lần truy cập page `/song-ssr`, server sẽ fetch data và generate HTML, sau đó return response cho từng request
- Server có thể get data từ DB hoặc nguồn khác, việc fetch rồi xử lý data này sẽ được thực thi trong hàm `getServerSideProps`. Tức là hàm này sẽ được server gọi mỗi khi có request đến (chỉ xảy ra tại server, do đó có thể lưu sensitive data ở đây)
- Request mà browser fetch: `https://nextjs-ecommerce-phi-lac.vercel.app/_next/data/ffyoerJp3oTqLjRZFEAVv/song-ssr.json`
- Test thử thì thấy nó chậm quá
  - Trên [Lili Player](https://anhtuta.github.io/lili-player/#/bai-hat/) thì gọi BE API của LiliPlayer trực tiếp chỉ mất tầm 100-130ms
  - Nhưng trên app này, NodeJS server trên vercel gọi tới LiliPlayer API, xong return response cho client tốn tận 1600ms

## Client-side Rendering (CSR)

CSR is useful when your page **doesn't require SEO indexing**, when you don't need to pre-render your data, or when the content of your pages needs to **update frequently**.

We can use client-side data fetching at the component level

1. Client-side data fetching with `useEffect`

2. Client-side data fetching with [SWR](https://swr.vercel.app/)

Ref: https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side

## Keep the scroll position

To keep the scroll position when navigating between pages, we can use the `scroll={false}` prop with the `Link` component. Then, Next.js will navigate to the new page but will **not scroll to the top**, keeping the user's scroll position.

If you want even more control (e.g., scroll to a specific element), you can use a ref and scroll manually in a `useEffect` after route change. --> Ask Copilot if you want that advanced solution!
