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
    <Stack sx={{ pr: 10, mt: 4, color: "white" }}>
      <Stack
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={{ width: "75%", alignSelf: "end" }}
      >
        <Box
          sx={{
            display: "flex",
            width: "40%",
            p: 2,
          }}
        >
          <PlaceIcon sx={{ pr: 2 }} />
          <Typography>San Francisco</Typography>
        </Box>
        <Box sx={{ display: "flex", width: "40%", p: 2 }}>
          <TwitterIcon sx={{ pr: 2 }} />
          <Typography>Not Available</Typography>
        </Box>
        <Box sx={{ display: "flex", width: "40%", p: 2 }}>
          <LinkIcon sx={{ pr: 2 }} />
          <Typography>https://github.com</Typography>
        </Box>
        <Box sx={{ display: "flex", width: "40%", p: 2 }}>
          <HomeWorkIcon sx={{ pr: 2 }} />
          <Typography>Sogital Lab</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default ContactSection;
