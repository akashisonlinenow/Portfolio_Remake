import React from "react";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./components/resumePDF"), {
  ssr: false,
});

const ResumePage = () => {
  return (
    <div>
      <PDFViewer />
    </div>
  );
};

export default ResumePage;
