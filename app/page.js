import Image from "next/image";
import Link from "next/link";
import styles from "./styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Landing from "../app/Pages/Components/Landing/";

import { Toaster } from "react-hot-toast";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Head>
          <link rel="icon" href="/favicon.png" type="image/svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;1,100;1,300;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Toaster />

        <Landing insideHomePage={true} />
        {/* <TrustBy />
      <Values />
      <OurServicesHeader />
      <Project />
      <OurSecurity />
      <HeadIntegrations />
      <Testimonial />
      <OurJourney /> */}
      </main>
    </>
  );
}
