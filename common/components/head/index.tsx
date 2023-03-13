import Head from "next/head";
import { deployedlink } from "data/link";

const HeadComponent = () => {
  return (
    <Head>
      <meta name="description" content="Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={deployedlink} key="ogUrl" />
      <meta property="og:type" content="website" key="ogType" />
      <meta property="og:title" content="Personal Portfolio" key="ogTitle" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:description"
        content={`Hey there, I'm ${process.env.NEXT_PUBLIC_FIRST_NAME} ${process.env.NEXT_PUBLIC_LAST_NAME}. Checkout My Portfolio `}
        key="ogDesc"
      />
      <meta property="og:image" content={"/siteImage.png"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
