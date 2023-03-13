import Head from "next/head";
import dynamic from "next/dynamic";
import Container from "@layout/pageTranstion";
import InitialPage from "@layout/initialPage";
import { Spinner } from "@components/loader/";

const Page404 = dynamic(() => import("@modules/extras/404Page"), {
  loading: () => <Spinner />,
});

const PageNotFound = () => {
  return (
    <Container>
      <Head>
        <title>Hmmm...</title>
      </Head>
      <div>
        <InitialPage>
          <Page404 />
        </InitialPage>
      </div>
    </Container>
  );
};

export default PageNotFound;
