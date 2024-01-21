import React, { useState } from 'react';
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
  Card
} from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ProfileSetup = () => {
    const [profile, setProfile] = useState({
        profilePicture: '',
        linkedIn: '',
        fieldOfWork: '',
        interests: [],
        location: ''
    });

    const fields = [
        'healthcare', 
        'tech', 
        'architecture', 
        'education', 
        'sales', 
        'entertainment', 
        'engineering', 
        'communication', 
        'finance', 
        'media', 
        'other'
    ];

    // The countries array should contain objects with 'code' and 'label' properties
    const countries = [
        { code: 'CA', label: 'Canada' },
        { code: 'US', label: 'United States' },
        // Add more countries here
    ];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Profile Data:', profile);
        // Here you would typically make an API call to the backend
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Card variant="outlined" sx={{ p: 3 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Set Your Profile
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    <Avatar
                        sx={{ width: 100, height: 100 }}
                        src={profile.profilePicture} // Replace with the path to the user's image
                        alt="User Profile Picture"
                    />
                    <Box>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="profile-picture-upload"
                            type="file"
                            onChange={(event) => {
                                // Handle the file upload logic here
                                // For example, you could create a URL for the uploaded file:
                                // setProfile({...profile, profilePicture: URL.createObjectURL(event.target.files[0])});
                            }}
                        />
                        <label htmlFor="profile-picture-upload">
                            <Button variant="contained" component="span" startIcon={<PhotoCamera />} sx={{ backgroundColor: "#EA67CB", ":hover": { backgroundColor: "#D356BF" } }}>
                                Add Profile Picture
                            </Button>
                        </label>
                        <Button variant="contained" sx={{ backgroundColor: "#EA67CB", ":hover": { backgroundColor: "#D356BF" }, ml: 2 }}>
                            Remove
                        </Button>
                    </Box>
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
                            label="Field of Work"
                        >
                            {fields.map(field => (
                                <MenuItem key={field} value={field}>{field}</MenuItem>
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
                            multiple
                        >
                            {fields.map(field => (
                                <MenuItem key={field} value={field}>{field}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Location</InputLabel>
                        <Select
                            name="location"
                            value={profile.location}
                            onChange={handleChange}
                            label="Location"
                        >
                            {countries.map((country) => (
                                <MenuItem key={country.code} value={country.code}>
                                    {country.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
                    <Button variant="contained" onClick={handleSubmit} sx={{ width: "80%", backgroundColor: "#EA67CB", ":hover": { backgroundColor: "#D356BF" } }}>
                        Save Profile
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};

export default ProfileSetup;
