import { CircularProgress } from "@mui/material";
import React, { CSSProperties } from "react";

type SpinnerProps = {
  size?: number;
};

const SpinnerStyles: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  padding: "1rem",
};

const Spinner = (props: SpinnerProps) => {
  const { size } = props;
  return (
    <div style={SpinnerStyles}>
      <CircularProgress size={size} />
    </div>
  );
};

export default Spinner;
