import React from "react";
import Box from "@mui/material/Box";
import UserProfileDetails from "../userProfileDetails/UserProfileDetails";

function DetailsSection() {
  return (
    <Box
      sx={{
        width: 1,
        height: "70%",
        bgcolor: "#1F2A48",
        mt: 4,
        p: 1,
        borderRadius: 5,
      }}
    >
      <UserProfileDetails />
    </Box>
  );
}

export default DetailsSection;
