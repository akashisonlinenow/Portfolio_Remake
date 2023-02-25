import Alert from "@mui/material/Alert";
import useStore from "store/store";
import Snackbar from "@mui/material/Snackbar";

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
