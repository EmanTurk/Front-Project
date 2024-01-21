import React from "react";
import { Container, Box, Typography, TextField, Button, Link } from "@mui/material";
import sign_up_page from "../assets/sign_up_page.png"; // Background image
import bridge from "../assets/bridge.png"; // Logo image
import { Link as RouterLink } from "react-router-dom";






const Signup = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Box sx={{ display: "flex", width: "90%", borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", overflow: "hidden" }}>
          {/* Left Side - Background Image */}
          <Box sx={{ flex: 1, backgroundImage: `url(${sign_up_page})`, backgroundSize: "cover", backgroundPosition: "center" }} />

          {/* Right Side - Form Fields */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#fff", padding: "20px" }}>
            <Typography variant="h4" sx={{ mb: 2, marginTop:'10px' }}> {/* Reduced gap */}
              Welcome to
            </Typography>
            <img src={bridge} alt="Logo" style={{ width: "180px", height: "180px", marginBottom: "5px" }} /> {/* Reduced gap */}
            <Typography 
  variant="h3" 
  sx={{ 
    mb: 2, 
    fontSize: '1rem', 
    color: 'grey', 
    textAlign: 'center' 
  }}>
  Let's mix the professional with the fun! Connect with colleagues, forge new networks, and capture fun moments at work. It's like LinkedIn meets Instagram, but more entertaining!
</Typography>


            <TextField label="Name" variant="outlined" sx={{ mb: 2, width: "80%", ".MuiInputBase-input": { borderRadius: "10px" } }} />
            <TextField label="Email" variant="outlined" sx={{ mb: 2, width: "80%", ".MuiInputBase-input": { borderRadius: "10px" } }} />
            <TextField label="Password" type="password" variant="outlined" sx={{ mb: 2, width: "80%", ".MuiInputBase-input": { borderRadius: "10px" } }} />
            <TextField label="Address" variant="outlined" sx={{ mb: 2, width: "80%", ".MuiInputBase-input": { borderRadius: "10px" } }} />
            <Button variant="contained" sx={{ width: "50%", marginBottom: '15px', backgroundColor: "#EA67CB", ":hover": { boxShadow: "0 0 15px #EA67CB", backgroundColor: "#EA67CB" } }}>
              Sign Up
            </Button>

         
           <RouterLink to="/signin" variant="body2" sx={{ mt: 2 }}>
              Have an account already? Sign in
            </RouterLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
