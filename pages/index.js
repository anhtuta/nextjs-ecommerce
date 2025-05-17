import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { siteMeta } from "../constants/config";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p className={utilStyles.headingLg}>Welcome to {siteMeta.name}</p>
      </section>
    </Layout>
  );
}
