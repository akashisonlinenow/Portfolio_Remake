import { createTheme } from "@mui/material";
import Spinner from "@components/loader/Spinner";

export const ThemeSettings = () => {
  return createTheme({
    typography: {
      allVariants: {
        fontFamily: "var(--defaultFont)",
        textTransform: "none",
      },
    },
    components: {
      MuiCircularProgress: {
        defaultProps: {
          color: "inherit",
          thickness: 6,
        },
      },
      MuiDialog: {
        defaultProps: {
          fullWidth: true,
        },
        styleOverrides: {
          paper: {
            backgroundColor: "var(--mPannelColor)",
            color: "#fff",
            margin: "10px",
            flex: 1,
            padding: "1rem 0rem",
            borderRadius: "15px",
          },
        },
      },
      MuiDialogTitle: {
        defaultProps: {
          sx: {
            fontWeight: "var(--diagTitleWeight)",
            fontSize: "var(--diagTitleFSize)",
          },
        },
      },
      MuiDialogContent: {
        defaultProps: {
          sx: {
            padding: "1rem 0rem",
          },
        },
      },
      MuiBackdrop: {
        defaultProps: {
          sx: {
            backdropFilter: "blur(3px)",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          color: "inherit",
          sx: { backgroundColor: "inherit" },
        },
      },
      MuiIconButton: {
        defaultProps: {
          color: "inherit",
        },
      },
    },
  });
};
