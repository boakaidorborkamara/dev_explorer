import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

function ContactSection() {
  return (
    <Box>
      <Stack>
        <Box>
          <PlaceIcon />
          <Typography>San Francisco</Typography>
        </Box>
        <Box>
          <TwitterIcon />
          <Typography>Not Available</Typography>
        </Box>
        <Box>
          <LinkIcon />
          <Typography>https://github.com</Typography>
        </Box>
        <Box>
          <HomeWorkIcon />
          <Typography>Sogital Lab</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default ContactSection;
