import React from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import { Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
import styles from "../styles/Resume.module.scss";

const PDFViewer = () => {
  return (
    <div className={styles.document}>
      <Document file={"Resume.pdf"}>
        <Page pageIndex={0}></Page>
      </Document>
    </div>
  );
};

export default PDFViewer;
