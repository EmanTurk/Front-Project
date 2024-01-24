import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
} from "@mui/material";
import sign_up_page from "../assets/sign_up_page.png"; // Background image
import bridge from "../assets/bridge.png"; // Logo image
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  // State variables for email and password
  const [email, setEmail] = useState(''); // Initialize with an empty string
  const [password, setPassword] = useState(''); // Initialize with an empty string

  // Function to handle the sign-in process
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await axios.post('https://backend-x-5.onrender.com/api/users/login', {
        email: email,
        password: password,
      });
      window.localStorage.setItem('user', JSON.stringify(response.data))
      // Handle the response, store tokens or user data in the frontend
      console.log('Logged in successfully', response.data);
      navigate('/profile');
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Box sx={{ display: "flex", width: "90%", borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", overflow: "hidden" }}>
          {/* Left Side - Background Image */}
          <Box sx={{ flex: 1, backgroundImage: `url(${sign_up_page})`, backgroundSize: "cover", backgroundPosition: "center" }} />

          {/* Right Side - Form Fields */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#fff", padding: "20px" }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Sign In
            </Typography>
            <img src={bridge} alt="Logo" style={{ width: "150px", height: "auto", marginBottom: "20px" }} />
            
            {/* Wrap the input fields and button in a form element */}
            <form onSubmit={handleSignIn}>
              {/* Email and Password Input Fields */}
              <TextField
                label="Email"
                variant="outlined"
                sx={{ mb: 2, width: "80%", ".MuiInputBase-input": { borderRadius: "10px" } }}
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
                autoComplete="username"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                sx={{ mb: 2, width: "80%", ".MuiInputBase-input": { borderRadius: "10px" } }}
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state on input change
                autoComplete="current-password" 
              />
            
              {/* Sign In Button */}
              <Button
                type="submit" // Set the button type to "submit" to trigger form submission
                variant="contained"
                sx={{
                  width: "50%",
                  marginBottom: '15px',
                  backgroundColor: "#EA67CB",
                  ":hover": { boxShadow: "0 0 15px #EA67CB", backgroundColor: "#EA67CB" },
                }}
              >
                Sign In
              </Button>
            </form>
            
            <RouterLink to="/signup" variant="body2" sx={{ mt: 2 }}>
              Don't have an account? Sign up
            </RouterLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
