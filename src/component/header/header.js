import React from "react";
// import Grid from "@mui/material/Grid";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";

function Header() {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <h1 className="text-3xl font-bold underline">dev-explorer</h1>
      <div>
        <Box display="flex" alignItems="center">
          <p>LIGHT</p>
          <LightModeIcon />
        </Box>
      </div>
    </Box>
  );
}

export default Header;
