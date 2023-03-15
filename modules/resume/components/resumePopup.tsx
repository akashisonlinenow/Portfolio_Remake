import styles from "../styles/Resume.module.scss";
import ModalBase from "@components/modal";
import CloseIcon from "@mui/icons-material/Close";
import { resumelink } from "@data/link";
import IconButton from "@mui/material/IconButton";
import SkeletonPlaceHolder from "./skeleton";
import { motion } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import { useDataContext } from "@context/dataLayer";
import { AbstractTransition, DefaultVariant } from "common/animation/framer";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface popupProps {
  modal: boolean;
  closeFunc: () => void;
}

const ResumePopup: React.FC<popupProps> = ({ modal, closeFunc }) => {
  const currentWidth = useDataContext().value;
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
            variants={DefaultVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={AbstractTransition}
            className={styles.popup}
          >
            <Document
              file={resumelink}
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
