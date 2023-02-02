import React from "react";
import Head from "next/head";
import Container from "@layout/pageTranstion";
import Heading from "@components/heading/heading";
import AboutPage from '@modules/about/aboutScreen';

const About = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <Heading title="About" />
        <AboutPage />
      </div>
    </Container>
  );
};

export default About;
