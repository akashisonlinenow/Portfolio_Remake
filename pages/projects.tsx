import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Heading from "@components/heading/heading";
import Spinner from "@components/loader/Spinner";
import Container from "@layout/pageTranstion";
import InitialPage from "@layout/initialPage";

const ProjectPage = dynamic(() => import("@modules/projects/projectsScreen"), {
  loading: () => <Spinner />,
});

const Projects = () => {
  return (
    <Container>
      <Head>
        <title>Projects</title>
      </Head>
      <div>
        <InitialPage>
          <Heading title="Projects" disableMobileView />
          <ProjectPage />
        </InitialPage>
      </div>
    </Container>
  );
};

export default Projects;
