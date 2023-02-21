import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Spinner from "@components/loader/Spinner";
import Heading from "@components/heading/heading";
import Container from "@layout/pageTranstion";
import InitialPage from "@layout/initialPage";

const SkillsPage = dynamic(() => import("@modules/skills/skillsScreen"), {
  loading: () => <Spinner />,
});
const ToolsPage = dynamic(() => import("@modules/skills/toolsScreen"), {
  loading: () => <Spinner />,
});

const Skills = () => {
  return (
    <Container>
      <Head>
        <title>Skills</title>
      </Head>
      <div style={{ position: "relative" }}>
        <InitialPage
          style={{
            marginBottom: "3rem",
          }}
        >
          <Heading title="Skills" disableMobileView />
          <SkillsPage />
        </InitialPage>
        <ToolsPage />
      </div>
    </Container>
  );
};

export default Skills;
