import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Contact from "@components/contact";
import useStore from "@store/store";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const ContactDialog = () => {
  const DialogStatus = useStore((state) => state.dialogStatus);
  const SwitchDialog = useStore((state) => state.dialogSwitch);

  return (
    <Dialog open={DialogStatus} onClose={SwitchDialog}>
      <DialogTitle>Contact Me</DialogTitle>
      <DialogContent>
        <Contact />
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          variant="contained"
          onClick={SwitchDialog}
          sx={{ color: "#000", fontWeight: 900, marginInline: "10px" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactDialog;
