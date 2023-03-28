import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./App.css";

const ethereum = (window as any).ethereum;

function App() {
  const login = async () => {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    setAcount(accounts[0]);
  };

  const [account, setAcount] = useState<any>(null);

  return (
    <>
      <Button onClick={login}>login</Button>
      <Typography>Account: {account}</Typography>
    </>
  );
}

export default App;
