import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

function ModalBox({
  open,
  title,
  children,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        {title}
      </DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default ModalBox;