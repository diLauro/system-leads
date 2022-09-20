import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Layout } from "./layout";
import { Home } from "./pages/home";

console.log(process.env.REACT_APP_URL_API);
function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Home />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
