import { Box, Button, Menu, MenuItem } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import CollapsedMenu from "./CollapsedMenu";
import React from "react";

export default function SignInGroup({ isSignedIn, handleOpen }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      {isSignedIn ? (
        <>
          <LogoutIcon
            sx={{ display: { xs: "none", md: "block" } }}
          ></LogoutIcon>
          <Button color="inherit" sx={{ display: { xs: "none", md: "block" } }}>
            Sign out
          </Button>
        </>
      ) : (
        <>
          <LoginOutlinedIcon
            sx={{ display: { xs: "none", md: "block" } }}
          ></LoginOutlinedIcon>
          <Button
            color="inherit"
            sx={{ display: { xs: "none", md: "block" } }}
            onClick={handleOpen}
          >
            Sign in
          </Button>
        </>
      )}

      <CollapsedMenu openLogInForm={handleOpen}/>
      
    </Box>
  );
}


