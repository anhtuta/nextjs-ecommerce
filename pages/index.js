import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { siteMeta } from "../constants/config";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteMeta.name}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Menu</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`/genre`}>All genres</Link>
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/book`}>All books</Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
