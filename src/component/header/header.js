import React from "react";
// import Grid from "@mui/material/Grid";
import LightModeIcon from "@mui/icons-material/LightMode";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="h4">dev-explorer</Typography>
      <div>
        <Box display="flex" alignItems="center">
          <Typography marginRight="5px">LIGHT</Typography>
          <LightModeIcon />
        </Box>
      </div>
    </Box>
  );
}

export default Header;
