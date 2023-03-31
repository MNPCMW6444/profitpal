import { useState } from "react";
import POC from "./components/POC";
import { Box, Typography, Button } from "@mui/material";

const App = () => {
  const [x, setX] = useState("");

  return x ? (
    x === "vcs" ? (
      <POC vcs />
    ) : (
      <POC />
    )
  ) : (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Are you a founder or a VC manager?
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setX("vcs")}
          style={{ marginRight: "16px" }}
        >
          VC Manager
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setX("founders")}
        >
          Founder
        </Button>
      </Box>
    </Box>
  );
};
export default App;
