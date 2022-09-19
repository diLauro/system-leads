import { Grid, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Grid container padding={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Leads</Typography>
      </Grid>
      <Grid item xs={12} paddingTop={3}>
        Busca
      </Grid>
      <Grid item xs={12} paddingTop={2}>
        Table
      </Grid>
    </Grid>
  );
};
