import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useDialogContext } from "@context/fuctionalLayer";
import Contact from "@components/contact/contact";

const ContactDialog = () => {
  const [Modal, setModal] = useDialogContext();

  const handleClose = () => {
    setModal(false);
  };

  return (
    <Dialog open={Modal} onClose={handleClose}>
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
