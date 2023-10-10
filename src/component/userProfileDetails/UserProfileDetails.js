import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function UserProfileDetails() {
  return (
    <Box sx={{ color: "white" }}>
      <Stack direction="row">
        <Avatar
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/52508120?s=400&u=503f56be3040996cf843add7207f8fe83e245a19&v=4"
          sx={{ width: "15%", height: "15%" }}
        />
        <Stack direction="row">
          <Box>
            <Typography variant="h3">The Octocat</Typography>
            <Typography>@octocat</Typography>
          </Box>

          <Typography>Join 25 Jan 2011</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography>This profile has no bio.</Typography>
      </Stack>
    </Box>
  );
}

export default UserProfileDetails;
