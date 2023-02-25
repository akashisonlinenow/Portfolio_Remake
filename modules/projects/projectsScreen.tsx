import styles from "./styles/Projects.module.scss";
import dynamic from "next/dynamic";
import ProjectCard from "./components/card";
import useDataStore from "@store/dataStore";
import { Spinner } from "@components/loader";
import { useDataContext } from "@context/dataLayer";
import { useEffect, useState } from "react";
import type { SafeTypes } from "types/DataTypes";

const ProjectModal = dynamic(() => import("./components/projectModal"));

const ProjectPage = () => {
  const [Data, setData] = useState<SafeTypes[] | null>(null);
  const currenWidth = useDataContext();
  const isMobile = currenWidth < 1024;

  const ProjData = useDataStore((state) => state.projectData);
  const FetchProjects = useDataStore((state) => state.getProjectData);

  useEffect(() => {
    FetchProjects(ProjData);
    setData(ProjData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ProjData]);

  return (
    <>
      <ProjectModal />
      {Data ? (
        <div className={styles.container}>
          {Data?.map((e) => {
            return e.language && !e.fork ? (
              <ProjectCard
                failCase={e.name === "API Failed"}
                isMobile={isMobile}
                data={e}
                key={e.id}
              />
            ) : null;
          })}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ProjectPage;
