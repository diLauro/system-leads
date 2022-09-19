import { Modal, Paper } from "@mui/material";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModalSimple = ({ open, setOpen }: Props) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper sx={{ maxWidth: "500px", width: "80%", padding: 2}}>
        <h1>aaaa</h1>
      </Paper>
    </Modal>
  );
};
