import React from "react";
import Head from "next/head";
import Container from "@layout/pageTranstion";
import Heading from "@components/heading/heading";
import dynamic from "next/dynamic";
import InitialPage from "@layout/initialPage";
import Spinner from "@components/loader/Spinner";

const ResumePage = dynamic(() => import("@modules/resume/resumeScreen"), {
  loading: () => <Spinner />,
});

const Resume = () => {
  return (
    <Container>
      <Head>
        <title>Resume</title>
      </Head>
      <div>
        <InitialPage>
          <Heading title="Resume" disableMobileView />
          <ResumePage />
        </InitialPage>
      </div>
    </Container>
  );
};

export default Resume;
