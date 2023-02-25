import styles from "./styles/About.module.scss";
import AboutData from "@data/aboutData";

const AboutPage = () => {
  return (
    <>
      <div className={styles.container}>
        <AboutData defaultStyles={styles} />
      </div>
    </>
  );
};

export default AboutPage;
