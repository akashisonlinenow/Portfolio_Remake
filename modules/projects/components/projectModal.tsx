import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Modal.module.scss";
import Image from "next/image";
import PieChart from "./pieChart";
import ModalBase from "@components/modal/baseModal";
import Spinner from "@components/loader/Spinner";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PublicIcon from "@mui/icons-material/Public";
import Component from "@layout/componentTransition";
import { TbStar, TbGitFork } from "react-icons/tb";
import useStore from "store/store";
import type { DataProps } from "./pieChart";

interface langType {
  [key: string]: number;
}

const ProjectModal = () => {
  const [language, setLanguage] = useState<langType | null>(null);
  const currentSelection = useStore((state) => state.currentProject);
  const focusSelection = useStore((state) => state.focusProject);

  const handleClickAway = () => {
    focusSelection(null);
  };

  const getLangData = async () => {
    if (currentSelection) {
      try {
        const req = axios.get(currentSelection.languages_url);
        const res = await req;
        setLanguage(res.data);
      } catch {
        setLanguage({ Error: 1, "???": 0, "404": 1 });
      }
    }
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
    getLangData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSelection]);

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
                  {currentSelection.description}
                </div>
                <div className={styles.action}>
                  <Button>
                    <GitHubIcon /> View Source
                  </Button>
                  <Button>
                    <ContentCopyIcon /> Clone
                  </Button>
                  {currentSelection.homepage && (
                    <Button>
                      <PublicIcon /> Visit
                    </Button>
                  )}
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
