import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function UserProfileDetails({ user }) {
  console.log("profile", user[0].name);
  return (
    <Box sx={{ color: "white", p: 5 }}>
      <Stack direction="row">
        <Avatar
          alt="Remy Sharp"
          src={user[0].avatar_url}
          sx={{
            width: { xs: "30%", sm: "20%", md: "20%", lg: "15%" },
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
              {!user[0].name?"No name":user[0].name}
            </Typography>
            <Typography color="primary"> {!user[0].login? "Username not avaliable": "@"+user[0].login} </Typography>
          </Box>

          <Typography sx={{ mt: 1 }}>{user[0].created_at}</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          sx={{
            width: { xs: "100%", sm: "100%", lg: "80%" },
            mt: { sx: 4, sm: 4, xs: 4 },
            alignSelf: "end",
          }}
        >
          {!user[0].bio ? "This user doesn't have a bio.": user[0].bio }
        </Typography>
      </Stack>
    </Box>
  );
}

export default UserProfileDetails;
