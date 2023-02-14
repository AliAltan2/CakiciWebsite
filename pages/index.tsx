import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MainPage from "../components/MainPage";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
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
      <section id="AboutUs">
        <AboutUs />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      {/*Projects proper page*/}
    </div>
  );
};

export default Home;
