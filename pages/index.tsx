import Head from "next/head";
import dynamic from "next/dynamic";
import Spinner from "@components/loader/Spinner";
import Container from "@layout/pageTranstion";

const HomePage = dynamic(() => import("@modules/home/homeScreen"));
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
        <HomePage />
        <Timeline />
      </div>
    </Container>
  );
}
