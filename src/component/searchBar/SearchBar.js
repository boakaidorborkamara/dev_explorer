import React from "react";
import TextField from "@mui/material/TextField";
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
        borderRadius: 5,
      }}
    >
      <TextField placeholder="Search" sx={{ color: "white", width: "80%" }} />

      <Button variant="contained" item sx={{ width: "20%", py: 2 }}>
        Search
      </Button>
    </Box>
  );
}

export default SearchArea;
