import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function SearchArea() {
  return (
    <Box
      sx={{
        color: "white",
        bgcolor: "#1F2A48",
        width: "100%",
        padding: 1,
        mt: 4,
      }}
    >
      <TextField
        sx={{ color: "white", width: "80%" }}
        placeholder="Search"
        startIcon={<SearchIcon />}
      />

      <Button variant="contained" item sx={{ width: "20%", py: 2 }}>
        Search
      </Button>
    </Box>
  );
}

export default SearchArea;
