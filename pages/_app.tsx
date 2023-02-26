import "@styles/globals.scss";
import styles from "@styles/Root.module.scss";
import Footer from "@modules/footer/footer";
import dynamic from "next/dynamic";
import ContextProviders from "@context/index";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { consoleMsg } from "@test/consoleMsg";
import { ThemeSettings } from "@constants/theme";
import { ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

const Pannel = dynamic(() => import("@modules/pannel/pannel"));
const SnackBar = dynamic(() => import("@components/snackbar"));
const ScrollTop = dynamic(() => import("@components/scrollToTop"));
const RouterEvent = dynamic(() => import("@hooks/routerEvents"));
const MobilePannel = dynamic(() => import("@modules/pannel/mobilePannel"));
const ContactDialog = dynamic(() => import("@components/contactDialog"));

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const ThemeData = ThemeSettings();

  useEffect(() => {
    console.info(consoleMsg);
  }, []);

  return (
    <>
      <ThemeProvider theme={ThemeData}>
        <ContextProviders>
          <ContactDialog />
          <SnackBar />
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
            <Pannel />
            <MobilePannel />
          </div>
        </ContextProviders>
      </ThemeProvider>
      <RouterEvent />
    </>
  );
}

// TODO: Create 404 Page