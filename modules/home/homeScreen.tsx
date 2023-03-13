import styles from "./styles/Home.module.scss";
import Arrow from "./components/mobileArrow";
import dynamic from "next/dynamic";
import Typewritter from "./components/typewritter";

const ParticleComponent = dynamic(() => import("@components/particles/"));

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.splash}>{"<Hello World>"}</div>
      <div className={styles.greet}>
        <span>{process.env.NEXT_PUBLIC_FIRST_NAME || "Jayesh"}</span>{" "}
        <span> Here!</span>
      </div>
      <div className={styles.writter}>
        <div>I&apos;m a </div>
        <Typewritter />
      </div>
      <Arrow />
      <ParticleComponent />
    </div>
  );
};

export default HomePage;
