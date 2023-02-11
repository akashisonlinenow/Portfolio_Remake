import React from "react";
import PDFViewer from "./components/resumePDF";
import styles from "./styles/Resume.module.scss";
// import Button from "@mui/material/Button";

const ResumePage = () => {
  return (
    <>
      <div className={styles.container}>
        <PDFViewer />
      </div>
    </>
  );
};

export default ResumePage;
