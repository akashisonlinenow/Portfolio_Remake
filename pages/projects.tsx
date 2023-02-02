import React from "react";
import Head from "next/head";
import Container from "@layout/pageTranstion";
import Heading from "@components/heading/heading";

const Projects = () => {
  return (
    <Container>
      <Head>
        <title>Projects</title>
      </Head>
      <div>
        <Heading title="Projects" />
      </div>
    </Container>
  );
};

export default Projects;
