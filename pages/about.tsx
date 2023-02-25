import Head from "next/head";
import dynamic from "next/dynamic";
import Heading from "@components/heading";
import Container from "@layout/pageTranstion";
import InitialPage from "@layout/initialPage";
import { Spinner } from "@components/loader";

const AboutPage = dynamic(() => import("@modules/about/aboutScreen"), {
  loading: () => <Spinner />,
});
const Calendar = dynamic(() => import("@modules/about/codeScreen"), {
  loading: () => <Spinner />,
});

const About = () => {
  return (
    <Container>
      <Head>
        <title>About</title>
      </Head>
      <div>
        <InitialPage className="exception-mobile-page-height">
          <Heading title="About" disableMobileView />
          <AboutPage />
        </InitialPage>
        <Calendar />
      </div>
    </Container>
  );
};

export default About;
