import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link as MuiLink,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import sign_up_page from "../assets/sign_up_page.png"; // Background image
import bridge from "../assets/bridge.png"; // Logo image

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });
  const [errorMessage, setErrorMessage] = useState({ field: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage({ field: '', message: '' }); // User friendly-Clear error message when user starts typing
  };
  const renderErrorMessage = (fieldName) => {
    return errorMessage.field === fieldName ? (
      <Typography color="error">{errorMessage.message}</Typography>
    ) : (
      <Typography style={{ height: '24px' }}></Typography> // Reserve space for error message
    );
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    
    // here I validated each field and set an error message if empty- 
    if (!formData.name) {
      setErrorMessage({ field: 'name', message: 'Please enter your name' });
      return;
    } else if (!formData.email) {
      setErrorMessage({ field: 'email', message: 'Please enter your email' });
      return;
    } else if (!formData.password) {
      setErrorMessage({ field: 'password', message: 'Please enter a password' });
      return;
    } else if (!formData.address) {
      setErrorMessage({ field: 'address', message: 'Please enter your address' });
      return;
    }
  

    const API_URL = 'https://backend-x-5.onrender.com/api/users';

    try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        const data = await response.json();
        console.log("Response data:", data); // Log the response data
    
        if (response.ok) {
          console.log("Signup successful, navigating to profile setup");
          navigate('/profileSetup');
        } else {
          console.error('Signup error:', data);
        }
      } catch (error) {
        console.error('Signup request failed:', error);
      }
    };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        
        <Box
          sx={{
            display: "flex",
            width: "90%",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            overflow: "hidden",
          }}>
          
          {/* Left Side - Background Image */}
          <Box
            sx={{
              flex: 1,
              backgroundImage: `url(${sign_up_page})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
  
          {/* Right Side - Form Fields */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              padding: "20px",
            }}>
  
            <Typography variant="h4" sx={{ mb: 2, marginTop: "10px" }}>Welcome to</Typography>
            <img src={bridge} alt="Logo" style={{ width: "180px", height: "180px", marginBottom: "5px" }} />
            <Typography variant="h3" sx={{ mb: 2, fontSize: "1rem", color: "grey", textAlign: "center" }}>
              Let's mix the professional with the fun! Connect with colleagues, forge new networks, and capture fun moments at work. It's like LinkedIn meets Instagram, but more entertaining!
            </Typography>
            
            <TextField name="name" label="Name" variant="outlined" onChange={handleChange} sx={{ mb: 1, width: "80%" }} />
            {renderErrorMessage('name')}
    
            <TextField name="email" label="Email" variant="outlined" onChange={handleChange} sx={{ mb: 1, width: "80%" }} />
            {renderErrorMessage('email')}
    
            <TextField name="password" label="Password" type="password" variant="outlined" onChange={handleChange} sx={{ mb: 1, width: "80%" }} />
            {renderErrorMessage('password')}
    
            <TextField name="address" label="Address" variant="outlined" onChange={handleChange} sx={{ mb: 1, width: "80%" }} />
            {renderErrorMessage('address')}
            
            <Button variant="contained" onClick={handleSignUp} sx={{ width: "50%", marginBottom: "15px", backgroundColor: "#EA67CB", ":hover": { boxShadow: "0 0 15px #EA67CB", backgroundColor: "#EA67CB" }}}>
              Sign Up
            </Button>
            
            <RouterLink to="/signin" style={{ textDecoration: 'none' }}>
              <MuiLink variant="body2" sx={{ mt: 2 }}>
                Have an account already? Sign in
              </MuiLink>
            </RouterLink>
  
          </Box>
        </Box>
      </Box>
    </Container>
  );
  
  
};

export default Signup;
