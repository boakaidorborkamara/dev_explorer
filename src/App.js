import React from "react";
import { useReducer, useEffect } from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./component/header/header";
import SearchArea from "./component/searchBar/SearchBar";
import DetailsSection from "./component/detailsSection/DetailsSection";

console.log(process.env);
// customize MUI default theme
const theme = createTheme({
  typography: {
    fontFamily: ["Fira Code", "monospace"].join(","),
  },
});

function Reducer(state, action) {
  switch (action.type) {
    case "search": {
      return { new_state: "WORKING" };
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(Reducer, []);
  console.log("state", state);

  useEffect(() => {
    console.log("Working");
    fetch("/users/devkapilbansal", {
      method: "GET",
      headers: {
        Accept: "Accept: application/vnd.github+json",
        Authorization: process.env.REACT_APP_API_KEY,
        "Access-Control-Allow-Origin": "*",
        // "X-GitHub-Api-Version": "2022-11-28",
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

  const handleSearch = () => {
    dispatch({ type: "search" });
  };

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
          <SearchArea handleSearch={handleSearch} />
          <DetailsSection />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
