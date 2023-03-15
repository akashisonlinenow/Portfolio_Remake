import styles from "./styles/About.module.scss";
import AboutData from "@data/aboutData";
import dynamic from "next/dynamic";

const ParticleComponent = dynamic(() => import("@components/particles/"));

const AboutPage = () => {
  return (
    <>
      <div className={styles.container}>
        <AboutData defaultStyles={styles} />
        <ParticleComponent />
      </div>
    </>
  );
};

export default AboutPage;
