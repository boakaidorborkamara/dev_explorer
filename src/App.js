import React from "react";
import { useReducer, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./component/header/header";
import SearchArea from "./component/searchBar/SearchBar";
import DetailsSection from "./component/detailsSection/DetailsSection";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import getUserData from "./helper/getUserData";
import customizeDefaultTheme from "./helper/customizeDefaultTheme";
import ErrorAlert from "./component/errorAlert/errorAlert";

// customize MUI default theme
const theme = customizeDefaultTheme(createTheme);

function Reducer(state, action) {
  switch (action.type) {
    case "search": {
      return [action.payload];
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
  const [userAction, setUserAction] = useState("loading_default_user");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUserData(userName, setIsLoading, dispatch, userAction);
  }, [userName, userAction]);

  const handleSearch = (username) => {
    if(username === ""){
      // alert("Enter a username");
      return;
    }
    setUsername(username);
    setUserAction("search");
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
          {isError===true?<ErrorAlert />:""}
          <DetailsSection user={user} />
        </Container>
      </Container>
    </ThemeProvider>
  );

  // conditional render ui
  if (isLoading === true) {
    return loadingScreen;
  }
   else if (isLoading === false) {
    return mainContentScreen;
  }
 
}

export default App;
