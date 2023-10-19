import React from "react";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function SearchArea({ handleSearch }) {
  const searchInputRef = useRef("working");
  return (
    <Box
      sx={{
        color: "white",
        bgcolor: "#1F2A48",
        width: "100%",
        padding: 1,
        mt: 4,
        borderRadius: 5,
      }}
    >
      <TextField
        placeholder="Search GitHub username..."
        inputRef={searchInputRef}
        sx={{ bgcolor: "white", width: "80%" }}
      />

      <Button
        variant="contained"
        item
        sx={{ width: "20%", py: 2 }}
        onClick={() => {
          console.log(searchInputRef.current.value);
          handleSearch(searchInputRef.current.value);
          searchInputRef.current.value = "";
        }}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchArea;
