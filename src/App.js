import React from "react";
import { useReducer, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./component/header/header";
import SearchArea from "./component/searchBar/SearchBar";
import DetailsSection from "./component/detailsSection/DetailsSection";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

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
      console.log("action", action);
      console.log("payload", action.payload);
      // return { new_state: "WORKING" };
      return [...state, action.payload];
    }
    case "loading_default_user": {
      return [...state, action.payload];
    }
  }
}

function App() {
  let initialValue = [];
  const [user, dispatch] = useReducer(Reducer, initialValue);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUsername] = useState("octocat");

  useEffect(() => {
    fetch(`/users/${userName}`, {
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
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }, []);

  const handleSearch = (username) => {
    // dispatch({ type: "search" });
    console.log("working", username);
    setUsername(username);
    dispatch({ type: "search", payload: username });
  };

  const loadingScreen = (
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
        {/* <Box sx={{ display: "flex" }}>
        <Typography sx={{ color: "white" }}>Loading</Typography>
        <CircularProgress sx={{ color: "white" }} />
      </Box> */}

        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />

        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>

        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>

        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
      </Container>
    </Container>
  );

  const mainContentScreen = (
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

  // conditional render ui
  let content = "";
  if (isLoading === true) {
    content = loadingScreen;
  } else if (isLoading === false) {
    content = mainContentScreen;
  }

  return content;
}

export default App;
