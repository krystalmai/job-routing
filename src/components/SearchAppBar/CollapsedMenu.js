import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../helpers/Context";
import { Avatar, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CollapsedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const auth = useAuth();
  const navigate = useNavigate();
  let location = useLocation();

  return (
    <div>
      <Button
        sx={{ display: { sm: "block", md: "none" } }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon color="action" />
      </Button>

      {auth.user ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Avatar sx={{ bgcolor: "white", width: 30, height: 30, mr: 1 }}>
              <AccountCircleIcon />
            </Avatar>
            <Typography variant="h6" mr={2}>
              {auth.user}
            </Typography>
          </MenuItem>

          <MenuItem
            onClick={() => {
              auth.signOut(() => navigate("/"));
            }}
          >
            Sign Out
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link
            to="/login"
            style={{ textDecoration: "none", color:"#fff" }}
            state={{ backgroundLocation: location }}
          >
            <MenuItem>Sign In</MenuItem>
          </Link>
        </Menu>
      )}
    </div>
  );
}
