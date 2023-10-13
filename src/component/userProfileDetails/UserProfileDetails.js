import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function UserProfileDetails() {
  return (
    <Box sx={{ color: "white", p: 5 }}>
      <Stack direction="row">
        <Avatar
          alt="Remy Sharp"
          src="https://avatars.githubusercontent.com/u/52508120?s=400&u=503f56be3040996cf843add7207f8fe83e245a19&v=4"
          sx={{
            width: { xs: "30%", sm: "35%", md: "20%" },
            height: "15%",
            mr: 4,
          }}
        />
        <Stack
          direction={{ xs: "col", sm: "col", md: "col", lg: "row" }}
          sx={{ width: 1, alignContent: "space-between" }}
        >
          <Box width="70%">
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              The Octocat
            </Typography>
            <Typography color="primary">@octocat</Typography>
          </Box>

          <Typography sx={{ mt: 1 }}>Join 25 Jan 2011</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          sx={{
            width: { xs: "100%", sm: "100%" },
            mt: { sx: 4, sm: 4, xs: 4 },
            alignSelf: "end",
          }}
        >
          This profile has no bio.
        </Typography>
      </Stack>
    </Box>
  );
}

export default UserProfileDetails;
