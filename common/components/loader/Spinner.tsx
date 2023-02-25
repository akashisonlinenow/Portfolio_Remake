import { CircularProgress } from "@mui/material";
import type { SpinnerProps } from "types/spinnerProps";
import type { CSSProperties } from "react";

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
