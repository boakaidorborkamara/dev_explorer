import React from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./component/header/header";
import SearchArea from "./component/searchBar/SearchBar";
import DetailsSection from "./component/detailsSection/DetailsSection";

const theme = createTheme({
  typography: {
    // fontFamily: ["Chilanka", "cursive"].join(","),
    fontFamily: ["Fira Code", "monospace"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          height: "95vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Container sx={{ height: "60vh" }}>
          <Header />
          <SearchArea />
          <DetailsSection />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
