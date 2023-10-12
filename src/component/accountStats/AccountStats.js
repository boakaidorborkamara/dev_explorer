import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

function AccountStats() {
  return (
    <Stack sx={{ pr: 10 }}>
      <Stack
        direction="row"
        sx={{
          width: "68%",
          bgcolor: "#141c2f",
          px: 4,
          py: 2,
          borderRadius: 2,
          color: "white",
          justifyContent: "space-between",
          alignSelf: "end",
        }}
      >
        <Box>
          <Typography>Repo</Typography>
          <Typography variant="h4">8</Typography>
        </Box>
        <Box>
          <Typography>Followers</Typography>
          <Typography variant="h4">6562</Typography>
        </Box>
        <Box>
          <Typography>Followings</Typography>
          <Typography variant="h4">0</Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default AccountStats;
