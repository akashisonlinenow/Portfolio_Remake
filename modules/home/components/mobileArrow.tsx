import styles from "../styles/Home.module.scss";
import ScrollPosition from "@hooks/scrollPosition";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { motion, useWillChange } from "framer-motion";

const Arrow = () => {
  const ScrollPos = ScrollPosition();
  const willChange = useWillChange();

  return (
    <>
      {ScrollPos < 100 && (
        <motion.div
          style={{ willChange }}
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className={styles.arrow}
        >
          <KeyboardDoubleArrowDownIcon style={{ fontSize: "2rem" }} />
        </motion.div>
      )}
    </>
  );
};

export default Arrow;
