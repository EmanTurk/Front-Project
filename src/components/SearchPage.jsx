import React, { useState } from 'react';
import { Container, TextField, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './SearchPageStyles.css'; 
import signUpPageImage from "../assets/sign_up_page.png"; 

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${signUpPageImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2, // Set opacity for background
          zIndex: -1, // Place it behind other elements
        }
      }}
    >
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          marginTop: '-10px',
        }}
      >
        <TextField
          value={searchQuery}
          onChange={handleSearchChange}
          variant="outlined"
          placeholder="Search..."
          className="glowingSearchBar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
            style: { borderRadius: '25px'}
          }}
        />
      </Container>
    </Box>
  );
};

export default SearchPage;
