import React from "react";
import styles from "./styles/Footer.module.scss";
import Contact from "@components/contact";

const Footer = () => {
  return (
    <div className={styles.container} id="footer">
      <Contact />
      <div>Made with ❤️ in India</div>
      {/* <div> © Copyright 2023 All Rights Reserved</div> */}
    </div>
  );
};

export default Footer;
