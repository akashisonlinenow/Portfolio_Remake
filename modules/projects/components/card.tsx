import axios from "axios";
import styles from "../styles/Card.module.scss";
import useStore from "store/store";
import ButtonBase from "@mui/material/ButtonBase";
import ActionButtons from "./actionButtons";
import { TbGitFork, TbStar } from "react-icons/tb";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useWillChange } from "framer-motion";
import type { FC } from "react";
import type { LanguageProps, ProjectCardProps } from "types/projectPageType";
import { AbstractTransition, ModalVariants } from "common/animation/framer";

const ProjectCard: FC<ProjectCardProps> = ({ data: e, isMobile, ...rest }) => {
  const [hover, setHover] = useState(isMobile ? true : false);
  const [langData, setLangData] = useState<LanguageProps | null>(null);

  const focusSelection = useStore((state) => state.focusProject);
  const focusLang = useStore((state) => state.focusProjLang);

  const startHover = () => {
    !isMobile && setHover(true);
  };
  const endHover = () => {
    !isMobile && setHover(false);
  };

  const getLangData = async () => {
    if (!langData) {
      console.log("Fetching");
      try {
        const req = axios.get(e.languages_url);
        const res = await req;
        setLangData(res.data);
      } catch {
        setLangData({ Error: 1, "???": 0, "404": 1 });
      }
    }
  };

  useEffect(() => {
    focusLang(langData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [langData]);

  const willChange = useWillChange();

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
              variants={ModalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={AbstractTransition}
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
            getLangData();
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

// TODO : Somehow find a way to bind the lang data to the card so that it dosent refetch everytime the user visits projects page
// TODO : optimize ani props
