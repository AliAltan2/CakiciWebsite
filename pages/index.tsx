import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";
import AboutUs from "../components/AboutUs";
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>CakiciWebsite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*Header*/}
      <Header />
      {/*Hero/Carosel*/}
      <section id="Hero" className="break-after-page">
        <Hero />
      </section>
      {/*All projects page */}
      <section id="MainPage" className="">
        <MainPage />
      </section>
      <section>
        <AboutUs />
      </section>
      {/*Projects proper page*/}
    </div>
  );
};

export default Home;
