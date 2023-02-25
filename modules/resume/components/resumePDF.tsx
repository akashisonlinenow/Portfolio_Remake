import { useState } from "react";
import styles from "../styles/Resume.module.scss";
import resumeLink from "@data/link";
import ResumePopup from "../components/resumePopup";
import SkeletonPlaceHolder from "./skeleton";
import { useDataContext } from "@context/dataLayer";
import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;
  const subTablet = currentWidth < 1480;

  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(!modal);
  };

  const widthParam = isMobile
    ? currentWidth / 1.25
    : subTablet
    ? currentWidth / 2.1
    : currentWidth / 3.5;

  return (
    <>
      <div className={styles.document}>
        <Document
          file={resumeLink}
          className={styles.documentBody}
          loading={<SkeletonPlaceHolder width={widthParam} />}
        >
          <Page
            pageIndex={0}
            onClick={handleClose}
            width={widthParam}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
      <ResumePopup closeFunc={handleClose} modal={modal} />
    </>
  );
};

export default PDFViewer;
