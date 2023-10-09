import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./component/header/header";

function App() {
  return (
    <>
      <Container
        // maxWidth="lg"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Container sx={{ height: "70vh" }}>
          <Header />
        </Container>

        {/* <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} /> */}
      </Container>
    </>
  );
}

export default App;
