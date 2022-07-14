import { Avatar, Box, Button, Typography, IconButton } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CollapsedMenu from "./CollapsedMenu";
import { useAuth } from "../../helpers/Context";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignInGroup() {
  const auth = useAuth();
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: { xs: "none", sm: "none", md: "flex" }, alignItems: "center" }}>
        {auth.user ? (
          <>
            <Avatar sx={{ bgcolor: "white", width: 30, height: 30, mr: 1 }}>
              <AccountCircleIcon />
            </Avatar>

            <Typography variant="h6" mr={2}>
              {auth.user}
            </Typography>

            <IconButton
              edge="end"
              onClick={() => {
                auth.signOut(() => navigate("/"));
              }}
            >
              <LogoutIcon />
            </IconButton>

            <Button
              color="inherit"
              onClick={() => {
                auth.signOut(() => navigate("/"));
              }}
            >
              Sign out
            </Button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#fff" }}
              state={{ backgroundLocation: location }}
            >
              <IconButton edge="end">
                <LoginOutlinedIcon />
              </IconButton>

              <Button color="inherit">Sign in</Button>
            </Link>
          </>
        )}
      </Box>

      <CollapsedMenu />
    </Box>
  );
}
