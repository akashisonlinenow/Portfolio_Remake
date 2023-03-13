import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ backgroundColor: "hsl(220, 12%, 10%)" }}>
      <Head />
      <body>
        <Main />
        <div id="portal_holder" />
        <NextScript />
      </body>
    </Html>
  );
}

// TODO : Try to implement Preloader screen
