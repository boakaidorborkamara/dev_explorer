import React from "react";
import { useReducer, useEffect, useState } from "react";
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
  console.log("ACTION", action);
  switch (action.type) {
    case "search": {
      return { new_state: "WORKING" };
    }
    case "loading_default_user": {
      return [...state, action.payload];
    }
  }
}

function App() {
  let initialValue = [];
  const [user, dispatch] = useReducer(Reducer, initialValue);
  const [isLoading, setIsLoading] = useState("false");
  console.log("state", user);

  useEffect(() => {
    console.log("Working");
    fetch("/users/octocat", {
      method: "GET",
      headers: {
        Accept: "Accept: application/vnd.github+json",
        Authorization: process.env.REACT_APP_API_KEY,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          dispatch({ type: "loading_default_user", payload: data });
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
          <DetailsSection user={user} />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
