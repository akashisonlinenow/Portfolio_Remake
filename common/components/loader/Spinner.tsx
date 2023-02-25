import React from "react";
import { CircularProgress } from "@mui/material";
import type { SxProps } from "@mui/material";

interface SpinnerProps {
  size?: number;
  sx?: SxProps;
}

const SpinnerStyles: React.CSSProperties = {
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
