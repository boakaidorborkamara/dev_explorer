import React from "react";
import { useReducer, useEffect } from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./component/header/header";
import SearchArea from "./component/searchBar/SearchBar";
import DetailsSection from "./component/detailsSection/DetailsSection";

// customize MUI default theme
const theme = createTheme({
  typography: {
    fontFamily: ["Fira Code", "monospace"].join(","),
  },
});

function Reducer(state, action) {
  switch (action.type) {
    case "search": {
      return state;
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(Reducer, []);
  console.log("state", state);

  useEffect(() => {
    console.log("Working");
    fetch("https://api.github.com/repos/octocat/Spoon-Knife", {
      method: "GET",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: "",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);

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
