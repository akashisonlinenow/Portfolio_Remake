import styles from "./styles/Resume.module.scss";
import Button from "@mui/material/Button";
import PDFViewer from "./components/resumePDF";
import DownloadIcon from "@mui/icons-material/Download";
import { resumelink } from "data/link";

const ResumePage = () => {
  return (
    <>
      <div className={styles.container}>
        <PDFViewer />
        <div className={styles.buttonGroup}>
          <Button
            href={resumelink}
            target="_blank"
            referrerPolicy="no-referrer"
            className={styles.button}
            sx={{ p: "1rem" }}
            startIcon={<DownloadIcon />}
          >
            Download Resume
          </Button>
          <Button
            href="#"
            target="_blank"
            referrerPolicy="no-referrer"
            disabled
            className={styles.button}
            sx={{ p: "1rem" }}
            startIcon={<DownloadIcon />}
          >
            Download CV
          </Button>
        </div>
      </div>
    </>
  );
};

export default ResumePage;

// TODO: Add CV Option Future
// TODO: Add Email function from client itself using email.js
