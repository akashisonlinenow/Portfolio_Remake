import styles from "./styles/Skills.module.scss";
import Heading from "@components/heading";
import Component from "@layout/componentTransition";
import SkillCard from "./components/skillCard";
import { motion } from "framer-motion";
import { ToolData } from "@data/skillsData";

const ToolsPage = () => {
  return (
    <>
      <Heading title="Tools" />
      <Component>
        <div className={styles.container}>
          {ToolData.map((e) => (
            <SkillCard key={e.name} data={e} />
          ))}
        </div>
      </Component>
    </>
  );
};

export default ToolsPage;
