import React from "react";
import Head from "next/head";
import Container from "@layout/pageTranstion";
import Heading from "@components/heading/heading";
// import SkillsPage from "@modules/skills/skillsScreen";
import dynamic from "next/dynamic";
import Spinner from "@components/loader/Spinner";

const SkillsPage = dynamic(() => import("@modules/skills/skillsScreen"), {
  loading: () => <Spinner />,
});

const Skills = () => {
  return (
    <Container>
      <Head>
        <title>Skills</title>
      </Head>
      <div>
        <Heading title="Skills" disableMobileView />
        <SkillsPage />
      </div>
    </Container>
  );
};

export default Skills;
