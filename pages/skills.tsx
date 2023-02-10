import React from "react";
import Head from "next/head";
import Container from "@layout/pageTranstion";
import Heading from "@components/heading/heading";
// import SkillsPage from "@modules/skills/skillsScreen";
import dynamic from "next/dynamic";
import Spinner from "@components/loader/Spinner";
import InitialPage from "@layout/initialPage";
import ToolsPage from "modules/skills/toolsScreen";

const SkillsPage = dynamic(() => import("@modules/skills/skillsScreen"), {
  loading: () => <Spinner />,
});

const Skills = () => {
  return (
    <Container>
      <Head>
        <title>Skills</title>
      </Head>
      <div style={{ position: "relative" }}>
        <InitialPage style={{marginBottom:"3rem"}}>
          <Heading title="Skills" disableMobileView />
          <SkillsPage />
        </InitialPage>
        <Heading title="Tools" />
        <ToolsPage />
      </div>
    </Container>
  );
};

export default Skills;
