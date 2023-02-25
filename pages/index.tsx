import Head from "next/head";
import dynamic from "next/dynamic";
import Heading from "@components/heading";
import Container from "@layout/pageTranstion";
import InitialPage from "@layout/initialPage";
import { Spinner } from "@components/loader/";

const HomePage = dynamic(() => import("@modules/home/homeScreen"), {
  loading: () => <Spinner />,
});
const Timeline = dynamic(() => import("@modules/home/timelineScreen"), {
  loading: () => <Spinner />,
});

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <InitialPage>
          <HomePage />
        </InitialPage>
        <Heading title="Timeline" />
        <Timeline />
      </div>
    </Container>
  );
}
