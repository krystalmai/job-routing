import React, {useState}  from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({isSignedIn}) {
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ pl: { xs: 2, md: 10 }, display: "flex", justifyContent:"center" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" , width:1000}}>
            < Box sx={{ display: "flex" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, mr: 2 }}
            >
              Job Routing
            </Typography>
            <Search>
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase sx={{ width: 320 }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>
            <Box sx={{ display: "flex", justifyContent: 'flex-end' }}>
              
              {isSignedIn ?
              
                (<><LogoutIcon sx={{ display: { xs: 'none', md: 'block' } }}></LogoutIcon>
                <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Sign out</Button></>)
              :
                (<> <LoginOutlinedIcon sx={{ display: { xs: 'none', md: 'block' } }}></LoginOutlinedIcon>
                <Button color="inherit" sx={{ display: { xs: 'none', md: 'block' } }}>Sign in</Button>
                </>
                )
              }
              
              <MoreVertIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
              
            </Box>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
