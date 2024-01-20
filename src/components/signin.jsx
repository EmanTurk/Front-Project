import React from "react";
import { Container, Box, Typography, TextField, Button, Link as MuiLink } from "@mui/material";
import sign_up_page from "../assets/sign_up_page.png"; // Background image
import bridge from "../assets/bridge.png"; // Logo image
import { Link as RouterLink } from "react-router-dom";




const SignIn = () => {
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
            <TextField label="Email" variant="outlined" sx={{ mb: 2, width: "80%", ".MuiInputBase-input": { borderRadius: "10px" } }} />
            <TextField label="Password" type="password" variant="outlined" sx={{ mb: 2, width: "80%", ".MuiInputBase-input": { borderRadius: "10px" } }} />
            <Button variant="contained" sx={{ width: "50%", backgroundColor: "#EA67CB", ":hover": { boxShadow: "0 0 15px #EA67CB", backgroundColor: "#EA67CB" } }}>
              Sign In
            </Button>
            




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
