import styles from "@styles/ScrollTop.module.scss";
import Button from "@mui/material/Button";
import { TiArrowUpThick } from "react-icons/ti";
import { useScroll, motion } from "framer-motion";

const ScrollTop = () => {
  const { scrollYProgress } = useScroll();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div style={{ scale: scrollYProgress }} className={styles.container}>
      <Button
        sx={{
          fontSize: "2rem",
          color: "#fff",
          backgroundColor: "var(--pannelColor) !important",
          borderRadius: "50%",
          height: "4rem",
          width: "4rem",
          p: 0,
        }}
        onClick={handleClick}
        variant="contained"
      >
        <TiArrowUpThick />
      </Button>
    </motion.div>
  );
};

export default ScrollTop;
