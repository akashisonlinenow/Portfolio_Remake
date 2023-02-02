import React from "react";
import Head from "next/head";
import Container from "@layout/pageTranstion";
import Heading from "@components/heading/heading";

const Skills = () => {
  return (
    <Container>
      <Head>
        <title>Skills</title>
      </Head>
      <div>
        <Heading title="Skills" />
      </div>
    </Container>
  );
};

export default Skills;
