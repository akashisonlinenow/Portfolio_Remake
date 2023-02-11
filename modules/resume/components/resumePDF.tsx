import React from "react";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
import { Document, Page, pdfjs } from "react-pdf";
import styles from "../styles/Resume.module.scss";
import Spinner from "@components/loader/Spinner";
import { useDataContext } from "common/context/dataLayer";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import SkeletonPlaceHolder from "modules/resume/components/resumeSkeleton";
// Experemental

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const link = `https://cdn.jsdelivr.net/gh/${process.env.gitUser}/${process.env.repo}/data/Resume.pdf`;

const PDFViewer = () => {
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;

  return (
    <div className={styles.document}>
      <Document
        file={link}
        className={styles.documentBody}
        loading={
          <SkeletonPlaceHolder
            width={isMobile ? currentWidth / 1.25 : currentWidth / 3.2}
          />
        }
      >
        <Page
          pageIndex={0}
          onClick={() => {
            console.log("lmao");
          }}
          width={isMobile ? currentWidth / 1.25 : currentWidth / 3.2}
          renderAnnotationLayer={false}
          renderTextLayer={false}
        />
      </Document>
    </div>
  );
};

export default PDFViewer;
{
  /* <div className={styles.download}>
          <IconButton
            href={link}
            target="_blank"
            referrerPolicy="no-referrer"
            size="large"
            sx={{ padding: 3 }}
          >
            <DownloadIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
        </div> */
}
