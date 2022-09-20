import { Modal, Paper, Grid, Button } from "@mui/material";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
};
export const ModalSimple = ({ open, setOpen, children }: Props) => {
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
      <Paper sx={{ maxWidth: "620px", width: "80%", padding: 2 }}>
        {children}

        <Grid container>
          <Grid
            item
            paddingTop={3}
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
          >
            <Button variant="contained" color="warning">
              Incluir
            </Button>
            <Button variant="outlined" color="inherit" onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};
