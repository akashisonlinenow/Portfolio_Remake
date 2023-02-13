import React from "react";
import styles from "../styles/Resume.module.scss";
import ModalBase from "@components/modal/baseModal";
import resumeLink from "@data/link";
import SkeletonPlaceHolder from "./skeleton";
import { motion } from "framer-motion";
import { useDataContext } from "@context/dataLayer";
import { Document, Page, pdfjs } from "react-pdf";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface popupProps {
  modal: boolean;
  closeFunc: () => void;
}

const ResumePopup: React.FC<popupProps> = ({ modal, closeFunc }) => {
  const currentWidth = useDataContext();
  const isMobile = currentWidth < 1024;
  const subTablet = currentWidth < 1280;

  const widthParam = subTablet ? currentWidth / 1.5 : currentWidth / 2;

  return (
    <>
      {!isMobile && (
        <ModalBase
          activation={modal}
          handleClickAway={closeFunc}
          style={{ maxHeight: "95vh", padding: "2rem 1rem" }}
        >
          <div className={styles.heading}>
            <div>Resume</div>
            <IconButton onClick={closeFunc}>
              <CloseIcon />
            </IconButton>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring" }}
            className={styles.popup}
          >
            <Document
              file={resumeLink}
              className={styles.popupBody}
              loading={<SkeletonPlaceHolder width={widthParam} />}
            >
              <Page
                pageIndex={0}
                width={widthParam}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          </motion.div>
        </ModalBase>
      )}
    </>
  );
};

export default ResumePopup;
