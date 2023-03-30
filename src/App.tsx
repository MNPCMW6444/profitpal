import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { useState } from "react";
import POC from "./components/POC";

const App = () => {
  const [x, setX] = useState("");

  return x ? (
    x === "vcs" ? (
      <POC vcs />
    ) : (
      <POC />
    )
  ) : (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Are you a founder or a VC manager?
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setX("vcs")}
              fullWidth
            >
              VC Manager
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setX("founders")}
              fullWidth
            >
              Founder
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default App;
