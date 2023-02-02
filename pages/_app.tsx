import type { AppProps } from "next/app";
import "@styles/globals.scss";
import styles from "@styles/Root.module.scss";
import dynamic from "next/dynamic";
import Pannel from "@modules/pannel/pannel";
import Footer from "@modules/footer/footer";
import { useRouter } from "next/router";
import { ThemeSettings } from "@constants/theme";
import { ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import ContextProviders from "@context/index";

const RouterEvent = dynamic(() => import("@hooks/routerEvents"));

const ContactDialog = dynamic(
  () => import("@components/contactDialog/contactDialog")
);

const ScrollTop = dynamic(() => import("@components/scrollToTop/topButton"));

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const ThemeData = ThemeSettings();

  return (
    <>
      <ThemeProvider theme={ThemeData}>
        <ContextProviders>
          <ContactDialog />
          <ScrollTop />
          <div className={styles.app}>
            <div className={styles.main}>
              <AnimatePresence
                mode="wait"
                onExitComplete={() => window.scrollTo(0, 0)}
              >
                <Component {...pageProps} key={router.asPath} />
              </AnimatePresence>
              <Footer />
            </div>
            <div className={styles.pannel}>
              <Pannel />
            </div>
          </div>
        </ContextProviders>
      </ThemeProvider>
      <RouterEvent />
    </>
  );
}
