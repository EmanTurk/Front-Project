import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ProfileIcon from "@mui/icons-material/Person";
import Logo from "../assets/bridge.png";

const ResponsiveNavBar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        // Mobile Bottom Navigation-Will change to the buttom when switching to a smaller screen.
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          style={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light white shade
            borderRadius: '10px 10px 0 0' // Rounded top borders
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
        </BottomNavigation>
      ) : (
        // Desktop Top Navigation
        <AppBar position="static" color="default" style={{ borderRadius: 10, margin: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <Toolbar>
            <img src={Logo} alt="Logo" style={{ height: '80px' }} /> {/* Adjust height as needed */}
            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton color="inherit" aria-label="home">
                <HomeIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="search" style={{ marginLeft: '20px' }}>
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="profile" style={{ marginLeft: '20px' }}>
                <ProfileIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};


export default ResponsiveNavBar;
