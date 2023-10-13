import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import Typography from "@mui/material/Typography";

function AccountStats() {
  return (
    // pr: 10,
    <Stack>
      <Stack
        direction="row"
        sx={{
          // width: "68%",
          width: { xs: "80%", sm: "80%", md: "90%", lg: "70%" },
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
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            8
          </Typography>
        </Box>
        <Box>
          <Typography>Followers</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            6562
          </Typography>
        </Box>
        <Box>
          <Typography>Followings</Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            0
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default AccountStats;
