import React from 'react';
import { AppBar, Toolbar, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ProfileIcon from '@mui/icons-material/Person';

const ResponsiveNavBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <>
      {/* Top Navigation for Desktop */}
      <AppBar position="static" color="primary" sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Home">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Search">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Profile">
            <ProfileIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Bottom Navigation for Mobile */}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={{ display: { xs: 'block', sm: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Profile" icon={<ProfileIcon />} />
      </BottomNavigation>
    </>
  );
};

export default ResponsiveNavBar;
