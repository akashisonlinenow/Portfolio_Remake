import Head from "next/head";
import dynamic from "next/dynamic";
import Heading from "@components/heading";
import Container from "@layout/pageTranstion";
import InitialPage from "@layout/initialPage";
import { Spinner } from "@components/loader";

const ResumePage = dynamic(() => import("@modules/resume/resumeScreen"), {
  loading: () => <Spinner />,
});
const Certificates = dynamic(
  () => import("@modules/resume/certificateScreen"),
  {
    loading: () => <Spinner />,
  }
);

const Resume = () => {
  return (
    <Container>
      <Head>
        <title>Resume</title>
      </Head>
      <div>
        <InitialPage
        // className="exception-mobile-page-height"
        >
          <Heading title="Resume" disableMobileView />
          <ResumePage />
        </InitialPage>
        <Certificates />
      </div>
    </Container>
  );
};

export default Resume;
