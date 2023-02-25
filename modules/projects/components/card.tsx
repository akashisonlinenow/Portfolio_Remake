import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Card.module.scss";
import useStore from "store/store";
import ButtonBase from "@mui/material/ButtonBase";
import ActionButtons from "./actionButtons";
import { TbGitFork, TbStar } from "react-icons/tb";
import { motion, AnimatePresence, useWillChange } from "framer-motion";
import type { SafeTypes } from "@data/failSafe";

interface cardProps {
  data: SafeTypes;
  isMobile: boolean;
  failCase?: boolean;
}

interface langType {
  [key: string]: number;
}

const ProjectCard = ({ data, isMobile, ...rest }: cardProps) => {
  const [hover, setHover] = useState(isMobile ? true : false);
  const focusSelection = useStore((state) => state.focusProject);
  const focusLang = useStore((state) => state.focusProjLang);

  const e = data;
  const startHover = () => {
    !isMobile && setHover(true);
  };
  const endHover = () => {
    !isMobile && setHover(false);
  };

  const willChange = useWillChange();

  // TODO : Somehow find a way to bind the lang data to the card so that it dosent refetch everytime the user visits projects page

  // ! Experemental
  const [langData, setLangData] = useState<langType | null>(null);

  const getLangData = async () => {
    console.log("fetching fn");
    try {
      // const req = axios.get("lmao");
      const req = axios.get(e.languages_url);
      const res = await req;
      setLangData(res.data);
    } catch {
      setLangData({ Error: 1, "???": 0, "404": 1 });
    }
  };

  useEffect(() => {
    getLangData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.div
        onHoverStart={startHover}
        onHoverEnd={endHover}
        className={styles.card}
        style={{ willChange }}
      >
        <AnimatePresence mode="wait">
          {hover && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring" }}
              className={styles.cardExtra}
              style={{ willChange }}
            >
              <ActionButtons data={e} />
            </motion.div>
          )}
        </AnimatePresence>
        <ButtonBase
          onClick={() => {
            focusSelection(e);
            focusLang(langData);
          }}
          className={styles.cardBody}
          data-error={rest.failCase}
        >
          <div className={styles.heading}>{e.name}</div>
          <div className={styles.lang}>{e.language}</div>
          <div className={styles.stats}>
            <span>
              <TbStar /> {e.stargazers_count}
            </span>
            <span>
              <TbGitFork /> {e.forks}
            </span>
          </div>
        </ButtonBase>
      </motion.div>
    </>
  );
};

export default ProjectCard;
