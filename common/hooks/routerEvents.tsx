import { useRouter } from "next/router";
import { LoadingIcon } from "@components/loader/";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const RouterEvent = () => {
  const Router = useRouter();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AnimatePresence>{Loading && <LoadingIcon />}</AnimatePresence>;
};

export default RouterEvent;
