import Head from "next/head";
import { deployedlink, socialDesc } from "@data/link";

const HeadComponent = () => {
  return (
    <Head>
      <meta name="description" content="Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={deployedlink} key="ogUrl" />
      <meta property="og:type" content="website" key="ogType" />
      <meta property="og:title" content="Personal Portfolio" key="ogTitle" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:description" content={socialDesc} key="ogDesc" />
      <meta property="og:image" content={`${deployedlink}siteImage.png`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
