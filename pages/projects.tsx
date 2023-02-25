import Head from "next/head";
import dynamic from "next/dynamic";
import Heading from "@components/heading";
import Container from "@layout/pageTranstion";
import InitialPage from "@layout/initialPage";
import { Spinner } from "@components/loader";

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
