import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import ReactFlagsSelect from "react-flags-select";
import axios from 'axios';

const ProfileSetup = () => {
  const [profile, setProfile] = useState({
    profilePicture: "",
    username: "",
    linkedIn: "",
    fieldOfWork: "",
    interests: [],
    location: "",
    bio:""
  });

  const fields = [
    "Healthcare",
    "Tech",
    "Architecture",
    "Education",
    "Sales",
    "Entertainment",
    "Engineering",
    "Communication",
    "Finance",
    "Media",
    "Other",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const API_URL = 'https://backend-x-5.onrender.com/api/updateProfile';
    const token = localStorage.getItem('token'); 
  
    try {
      const response = await axios.post(API_URL, profile, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.status === 200) {
        console.log("Profile saved successfully:", response.data);
      } else {
        console.error("Error saving profile:", response.status, response.data);
      }
    } catch (error) {
      console.error("Error in request:", error.response ? error.response.data : error.message);
    }
  };
  

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card variant="outlined" sx={{ 
                p: 3, 
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", 
                transition: "0.3s",
                ':hover': {
                    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.3)" 
                }
            }}>
        <Typography variant="h5" align="center" gutterBottom>
          Set Your Profile
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={profile.profilePicture} 
            alt="User Profile Picture"
          />
          <Box>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="profile-picture-upload"
              type="file"
              onChange={(event) => {
               
              }}
            />
            <label htmlFor="profile-picture-upload">
              <Button
                variant="contained"
                component="span"
                startIcon={<PhotoCamera />}
                sx={{
                  backgroundColor: "#EA67CB",
                  ":hover": { backgroundColor: "#D356BF" },
                }}>
                Add Profile Picture
              </Button>
            </label>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EA67CB",
                ":hover": { backgroundColor: "#D356BF" },
                ml: 2,
              }}>
              Remove
            </Button>
          </Box>
          <TextField
            name="username"
            label=" Choose Your User Name"
            value={profile.username}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="linkedIn"
            label="LinkedIn Profile"
            value={profile.linkedIn}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
       
          <FormControl fullWidth margin="normal">
            <InputLabel>Field of Work</InputLabel>
            <Select
              name="fieldOfWork"
              value={profile.fieldOfWork}
              onChange={handleChange}
              label="Field of Work">
              {fields.map((field) => (
                <MenuItem key={field} value={field}>
                  {field}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Interests</InputLabel>
            <Select
              name="interests"
              value={profile.interests}
              onChange={handleChange}
              label="Interests"
              multiple>
              {fields.map((field) => (
                <MenuItem key={field} value={field}>
                  {field}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          
          <Box sx={{ width: "100%", my: 2 }}>
            {" "}
           
            <ReactFlagsSelect
              selected={profile.location}
              onSelect={(code) => setProfile({ ...profile, location: code })}
              placeholder="Select Country"
              searchable={true}
              className="menu-flags"
            />
          </Box>

          <TextField
            name="bio"
            label="Bio"
            value={profile.bio}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
           <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: "80%",
              backgroundColor: "#EA67CB",
              ":hover": { backgroundColor: "#D356BF" },
            }}>
            Save Profile
          </Button>
        </Box>
      </Card>
    </Container>
  );
};

export default ProfileSetup;
