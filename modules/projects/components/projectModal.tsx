import Image from "next/image";
import styles from "../styles/Modal.module.scss";
import useStore from "store/store";
import PieChart from "./pieChart";
import ModalBase from "@components/modal";
import Component from "@layout/componentTransition";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ActionButtons from "../components/actionButtons";
import { Spinner } from "@components/loader";
import { TbStar, TbGitFork } from "react-icons/tb";
import { useEffect, useState } from "react";
import type { DataProps } from "types/projectPageType";
import type { LanguageProps } from "types/projectPageType";

const ProjectModal = () => {
  const [language, setLanguage] = useState<LanguageProps | null>(null);
  const currentSelection = useStore((state) => state.currentProject);
  const currentLang = useStore((state) => state.currentLang);
  const focusSelection = useStore((state) => state.focusProject);

  const handleClickAway = () => {
    focusSelection(null);
  };

  let subData: DataProps[] = [];

  if (language) {
    Object.entries(language).map((e) => {
      e[1] =
        Math.round(
          (e[1] / Object.values(language).reduce((a, b) => a + b, 0)) * 1000
        ) / 10;
      subData.push({ id: e[0], value: e[1] });
    });
  }

  const convertDate = (e: string) => {
    const formattedDate = new Date(e);
    return <>{formattedDate.toDateString()}</>;
  };

  useEffect(() => {
    setLanguage(currentLang);
  }, [currentLang]);

  return (
    <>
      <ModalBase
        activation={currentSelection ? true : false}
        handleClickAway={handleClickAway}
        style={{
          flex: 0.6,
          position: "relative",
        }}
      >
        <div className={styles.container}>
          {currentSelection && (
            <>
              <div className={styles.first}>
                <div className={styles.top}>
                  <div className={styles.heading}>
                    <span>{currentSelection.full_name.split("/")[0]}/</span>
                    <span>{currentSelection.full_name.split("/")[1]}</span>
                  </div>
                  <a
                    href={currentSelection.owner.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.image}
                  >
                    <Image
                      fill
                      quality={100}
                      sizes={"100px"}
                      unoptimized
                      src={currentSelection.owner.avatar_url}
                      alt="==T_T=="
                    />
                  </a>
                </div>
                <div className={styles.dateUpdated}>
                  <div className={styles.stats}>
                    <span>
                      <TbStar /> {currentSelection.stargazers_count}
                    </span>
                    <span>
                      <TbGitFork /> {currentSelection.forks_count}
                    </span>
                  </div>
                  <span>
                    Updated on: {convertDate(currentSelection.updated_at)}
                  </span>
                </div>
                {currentSelection.archived ? (
                  <div className={styles.archived}>
                    This Project is <span>Archived!</span>
                  </div>
                ) : null}

                <div className={styles.tags}>
                  {currentSelection.topics.map((e, i) => (
                    <span key={i}>
                      <span>#</span>
                      {e}
                    </span>
                  ))}
                </div>
                <div className={styles.desc}>
                  {currentSelection.description
                    ? currentSelection.description
                    : "No Description Available"}
                </div>
                <div className={styles.action}>
                  <ActionButtons data={currentSelection} variant="withText" />
                </div>
              </div>
              <Component>
                {language ? (
                  <div className={styles.chart}>
                    <PieChart data={subData} />
                  </div>
                ) : (
                  <Spinner />
                )}
              </Component>
              {currentSelection.license && (
                <div>License: {currentSelection.license.name}</div>
              )}
              <div className={styles.dateCreated}>
                Project Created on: {convertDate(currentSelection.created_at)}
              </div>
            </>
          )}
        </div>
        <div className={styles.close}>
          <IconButton onClick={handleClickAway}>
            <CloseIcon />
          </IconButton>
        </div>
      </ModalBase>
    </>
  );
};

export default ProjectModal;

// TODO: Optimize Code
