import React from "react";
import Box from "@mui/material/Box";
import UserProfileDetails from "../userProfileDetails/UserProfileDetails";
import ContactSection from "../contactSection/ContactSection";
import AccountStats from "../accountStats/AccountStats";

function DetailsSection() {
  return (
    <Box
      sx={{
        width: 1,
        height: "75%",
        bgcolor: "#1F2A48",
        mt: 4,
        p: 1,
        borderRadius: 5,
      }}
    >
      <UserProfileDetails />
      <AccountStats />
      <ContactSection />
    </Box>
  );
}

export default DetailsSection;
