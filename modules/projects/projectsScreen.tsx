import React from "react";
import Data from "data/failSafe";
import styles from "./styles/Projects.module.scss";
import dynamic from "next/dynamic";
import ProjectCard from "modules/projects/components/card";
import { useDataContext } from "@context/dataLayer";

const ProjectModal = dynamic(() => import("./components/projectModal"));

const ProjectPage = () => {
  const currenWidth = useDataContext();
  const isMobile = currenWidth < 1024;

  const BASE_URL = "https://api.github.com/users/KingBael09/repos";

  return (
    <>
      <ProjectModal />
      <div className={styles.container}>
        {Data.map((e) => {
          return e.language && !e.fork ? (
            <ProjectCard isMobile={isMobile} data={e} key={e.id} />
          ) : null;
        })}
      </div>
    </>
  );
};

export default ProjectPage;

// TODO : Add Dynamic Import
