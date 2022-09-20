import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { TiMinus, TiPlus } from "react-icons/ti";
import { useFetchAll } from "../../hook/FetchAll";
import { Domains } from "../../types/Domains";
import { Midias } from "../../types/Midas";

type Props = {
  domains: any;
  midia: Midias[];
};

export const FormLead = ({ domains, midia }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>Incluir lead</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          variant="outlined"
          size="small"
          label="Data e hora"
          color="warning"
          fullWidth
        />
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth size="small" color="warning">
          <InputLabel>Serviço</InputLabel>
          <Select label="Serviço">
            <MenuItem value={""}>Selecione</MenuItem>

            {domains?.SERVICE?.map((service: Domains) => (
              <MenuItem value={service?.id} key={service?.id}>
                {service?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth size="small" color="warning">
          <InputLabel>Mídia</InputLabel>
          <Select label="Mídia">
            <MenuItem value={""}>Selecione</MenuItem>

            {midia?.map((midia: Midias) => (
              <MenuItem value={midia?.id} key={midia?.id}>
                {midia?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6}>
        <FormControl fullWidth size="small" color="warning">
          <InputLabel>Origem</InputLabel>
          <Select label="Origem">
            <MenuItem value={""}>Selecione</MenuItem>

            {domains?.ORIGIN?.map((origin: Domains) => (
              <MenuItem value={origin?.id} key={origin?.id}>
                {origin?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          variant="outlined"
          size="small"
          label="Nome"
          color="warning"
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="delete">
                  <TiMinus size={16} />
                </IconButton>
                <IconButton aria-label="delete">
                  <TiPlus size={16} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          label="Telefone"
          color="warning"
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          id="input-with-icon-textfield"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="delete">
                  <TiMinus size={16} />
                </IconButton>
                <IconButton aria-label="delete">
                  <TiPlus size={16} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          variant="outlined"
          size="small"
          label="E-mail"
          color="warning"
          fullWidth
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          variant="outlined"
          size="small"
          label="CPF"
          color="warning"
          fullWidth
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          variant="outlined"
          size="small"
          label="CNH"
          color="warning"
          fullWidth
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          variant="outlined"
          size="small"
          label="Mensagem"
          color="warning"
          fullWidth
          multiline
          rows={4}
        />
      </Grid>
    </Grid>
  );
};
