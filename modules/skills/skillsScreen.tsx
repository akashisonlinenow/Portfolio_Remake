import styles from "./styles/Skills.module.scss";
import dynamic from "next/dynamic";
import SkillCard from "./components/skillCard";
import type { FC } from "react";
import type { SkillCardInterface } from "types/DataTypes";

const SkillModal = dynamic(() => import("./components/customModal"));

const SkillsPage: FC<SkillCardInterface> = ({ data: SkillData }) => {
  return (
    <>
      <SkillModal />
      <div className={styles.container}>
        {SkillData.map((e) => (
          <SkillCard key={e.name} data={e} />
        ))}
      </div>
    </>
  );
};

export default SkillsPage;
