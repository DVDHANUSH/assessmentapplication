import { useState, React } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { navbaritems } from "./consts/navbaritems";
// import Divider from '@mui/material/Divider';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from '@mui/material/ListItemText';
import { navbarStyles } from "./styles";
import { NavLink } from "react-router-dom";
import { IconButton, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import zIndex from "@mui/material/styles/zIndex";
import rs_logo from "../assets/rs_logo.png";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; 
import "@mui/material";
import { Stack } from "@mui/material";
function Navbar() {
  const [showName, setNames] = useState(false);
  const clickHandler = (bool) => {
    if (bool === true) {
      setNames(true);
      navbarStyles.drawer["& .MuiDrawer-paper"].width = 200;
      navbaritems[0].route = false;
    } else {
      setNames(false);
      navbarStyles.drawer["& .MuiDrawer-paper"].width = 70;
      navbaritems[0].route = true;
    }
  };
  return (
    <div>
      <AppBar
        color="transparent"
        sx={{ height: 50, zIndex: zIndex.drawer + 1 }}
      >
        <Toolbar
          sx={{
            paddingLeft: 0,
            paddingRight: 2,
            justifyContent: "space-between",
          }}
        >
          {/* Add your menu bar content here */}
          <img
            src={rs_logo}
            alt="no-display"
            style={{ height: 40, marginBottom: 15 }}
          />
          <Stack direction="row">
            <IconButton style={{ color: "#fe524a", marginBottom: 15 }}>
              <HelpOutlineIcon />
            </IconButton>

            <IconButton style={{ color: "#fe524a", marginBottom: 15 }}>
              <AccountCircleIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
        <Toolbar />
        {/* <Divider /> */}
        <List>
          {navbaritems.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <NavLink
                  to={text.route}
                  className="active"
                  onClick={() => clickHandler(text.route)}
                >
                  <ListItemIcon sx={navbarStyles.icons}>
                    {text.icon}
                  </ListItemIcon>
                </NavLink>
                {showName ? <ListItemText primary={text.label} /> : null}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
export default Navbar;
