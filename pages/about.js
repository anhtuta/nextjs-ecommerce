import Image from "next/image";
import Layout from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout pageTitle="About us">
      <p>This is a sample E-commerce site using NextJS</p>
      <p>Created by Tuzaku</p>
      <p>
        <Image priority src="/images/profile.jpg" className={utilStyles.borderCircle} height={144} width={144} alt="" />
      </p>
    </Layout>
  );
}
