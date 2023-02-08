import React from "react";
import Head from "next/head";
import Container from "@layout/pageTranstion";
import Heading from "@components/heading/heading";
import dynamic from "next/dynamic";
import Spinner from "@components/loader/Spinner";
import InitialPage from "@layout/initialPage";

const AboutPage = dynamic(() => import("@modules/about/aboutScreen"));
const Calendar = dynamic(() => import("@modules/about/codeScreen"), {
  loading: () => <Spinner />,
});

const About = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <InitialPage>
          <Heading title="About" disableMobileView />
          <AboutPage />
        </InitialPage>
        <Calendar />
      </div>
    </Container>
  );
};

export default About;
