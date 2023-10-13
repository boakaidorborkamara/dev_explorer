import React from "react";
// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkIcon from "@mui/icons-material/Link";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

function ContactSection() {
  return (
    <Stack
      sx={{
        mt: 4,
        color: "white",
        justifyContent: "center",
        alignItems: "end",
        marginBottom: 2,
      }}
    >
      <Grid
        container
        // spacing={2}
        justifyContent="center"
        alignItems="center"
        // width="90%"
        sx={{ width: { lg: "76%" } }}
      >
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="row"
          // bgcolor="red"
          padding={2}
        >
          <PlaceIcon sx={{ pr: 1 }} />
          <Typography>San Francisco</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="row"
          // bgcolor="green"
          padding={2}
        >
          <TwitterIcon sx={{ pr: 1 }} />
          <Typography>Not Available</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="row"
          padding={2}
          // bgcolor="yellow"
        >
          <LinkIcon sx={{ pr: 1 }} />
          <Typography>https://github.com</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="row"
          // bgcolor="red"
          padding={2}
        >
          <HomeWorkIcon sx={{ pr: 1 }} />
          <Typography>Sogital Lab</Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default ContactSection;
