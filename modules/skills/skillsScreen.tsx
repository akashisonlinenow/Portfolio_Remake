import styles from "./styles/Skills.module.scss";
import dynamic from "next/dynamic";
import SkillCard from "./components/skillCard";
import { SkillData } from "@data/skillsData";

const SkillModal = dynamic(() => import("./components/customModal"));

const SkillsPage = () => {
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
