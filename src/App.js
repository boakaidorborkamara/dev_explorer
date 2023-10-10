import React from "react";
import Container from "@mui/material/Container";
import Header from "./component/header/header";
import SearchArea from "./component/searchBar/SearchBar";
import DetailsSection from "./component/detailsSection/DetailsSection";

function App() {
  return (
    <>
      <Container
        maxWidth="md"
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
          <SearchArea />
          <DetailsSection />
        </Container>
      </Container>
    </>
  );
}

export default App;
