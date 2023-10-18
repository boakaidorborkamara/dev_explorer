import React from "react";
import Box from "@mui/material/Box";
import UserProfileDetails from "../userProfileDetails/UserProfileDetails";
import ContactSection from "../contactSection/ContactSection";
import AccountStats from "../accountStats/AccountStats";

function DetailsSection({ user }) {
  console.log("user", user);
  return (
    <Box
      sx={{
        width: 1,
        // height: "80vh",
        bgcolor: "#1F2A48",
        mt: 4,
        marginBottom: 5,
        p: 1,
        borderRadius: 5,
      }}
    >
      <UserProfileDetails user={user} />
      <AccountStats user={user} />
      <ContactSection user={user} />
    </Box>
  );
}

export default DetailsSection;
