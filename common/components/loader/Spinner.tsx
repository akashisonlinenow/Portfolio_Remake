import { CircularProgress, SxProps } from "@mui/material";
import React, { CSSProperties } from "react";

interface SpinnerProps {
  size?: number;
  sx?: SxProps;
}

const SpinnerStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  padding: "1rem",
};

const Spinner = (props: SpinnerProps) => {
  return (
    <div style={SpinnerStyles}>
      <CircularProgress {...props} />
    </div>
  );
};

export default Spinner;
