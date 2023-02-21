import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Contact from "@components/contact/contact";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useStore from "store/store";

const ContactDialog = () => {
  const DialogStatus = useStore((state) => state.dialogStatus);
  const SwitchDialog = useStore((state) => state.dialogSwitch);

  const handleClose = () => {
    SwitchDialog();
  };

  return (
    <Dialog open={DialogStatus} onClose={handleClose}>
      <DialogTitle>Contact Me</DialogTitle>
      <DialogContent>
        <Contact />
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          variant="contained"
          color="inherit"
          onClick={handleClose}
          sx={{ color: "#000", fontWeight: 900, marginInline: "10px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
