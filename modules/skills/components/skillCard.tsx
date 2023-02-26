import styles from "../styles/Card.module.scss";
import Button from "@mui/material/Button";
import useStore from "store/store";
import { motion } from "framer-motion";
import { useDataContext } from "@context/dataLayer";
import type { SkillCardProps } from "types/skillPageType";

// TODO:  Learn how to do Conditional Types to inherit MotionProps when enableMotion prop in passed

const SkillCard: React.FC<SkillCardProps> = ({ data, className, ...rest }) => {
  const focusSelection = useStore((state) => state.focusSelection);
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;
  return (
    <>
      <Button
        onClick={() => {
          focusSelection(data);
        }}
        className={`${styles.card} ${className}`}
        component={!isMobile ? motion.button : Button}
        {...rest}
        data-node={rest.node == "true" ? true : false}
      >
        <div className={styles.icon}>{data.icon}</div>
        <div className={styles.cardName}>{data.name}</div>
      </Button>
    </>
  );
};

export default SkillCard;
