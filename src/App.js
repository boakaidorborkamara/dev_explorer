import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./component/header/header";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </>
  );
}

export default App;
