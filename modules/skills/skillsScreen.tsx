import React from "react";
import styles from "./styles/Skills.module.scss";
import { SkillData } from "@data/skillsData";
import SkillCard from "./components/skillCard";

const SkillsPage = () => {
  return (
    <>
      <div className={styles.container}>
        {SkillData.map((e) => {
          return <SkillCard key={e.name} data={e} />;
        })}
      </div>
    </>
  );
};

export default SkillsPage;
