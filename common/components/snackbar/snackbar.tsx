import { Alert, Button, Snackbar } from "@mui/material";
import React from "react";
import useStore from "store/store";

const SnackBar = () => {
  const Notice = useStore((state) => state.notification);
  const ClearNotice = useStore((state) => state.clearNotification);

  return (
    <>
      <Snackbar
        open={Notice.activation}
        autoHideDuration={2000}
        ContentProps={
          !Notice.status
            ? { sx: { color: "black", background: "white", fontWeight: 700 } }
            : undefined
        }
        onClose={ClearNotice}
        message={Notice.msg}
      >
        {Notice.status && (
          <Alert
            variant="filled"
            onClose={ClearNotice}
            severity={Notice.status}
            sx={{ width: "100%" }}
          >
            {Notice.msg}
          </Alert>
        )}
      </Snackbar>
    </>
  );
};

export default SnackBar;
