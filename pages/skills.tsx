import Head from "next/head";
import dynamic from "next/dynamic";
import Heading from "@components/heading";
import Container from "@layout/pageTranstion";
import InitialPage from "@layout/initialPage";
import getSkillData from "data/skillsData";
import { Spinner } from "@components/loader";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

const SkillsPage = dynamic(() => import("@modules/skills/skillsScreen"), {
  loading: () => <Spinner />,
});
const ToolsPage = dynamic(() => import("@modules/skills/toolsScreen"), {
  loading: () => <Spinner />,
});

const Skills = ({
  SkillData,
  ToolData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
          <SkillsPage data={SkillData} />
        </InitialPage>
        <ToolsPage data={ToolData} />
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { SkillData, ToolData } = getSkillData();
  return {
    props: { SkillData, ToolData },
  };
};

export default Skills;
