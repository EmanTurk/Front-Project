import React, { useState } from "react";
import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Typography,
  Avatar,
  Link,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleIcon from "@mui/icons-material/People";
import ImageGrid from "./ImageGrid";
import Connections from "./Connections";

const ProfilePage = () => {
  // importantttt-dummy data, to be replacd with actual data from your back-end
  const profileData = {
    username: "Max Jacobson",
    bio: "UI/UX Designer at @Ecommercex",
    location: "San Francisco",
    followersCount: "321k",
    followingCount: "125",
    profilePicture: "",
    linkedInProfile: "https://linkedin.com/in/username",
  };

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Avatar
            alt={profileData.username}
            src={profileData.profilePicture}
            sx={{ width: 90, height: 90, mx: "auto" }}
          />
          <Typography variant="h6" sx={{ mt: 2 }}>
            {profileData.username}
          </Typography>
          <Link
            href={profileData.linkedInProfile}
            target="_blank"
            rel="noopener"
            sx={{ display: "block", mb: 1 }}>
            LinkedIn Profile
          </Link>
          <Typography variant="body2" sx={{ mb: 1 }}>
            {profileData.bio}
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            {profileData.location}
          </Typography>
          {/* sectionn-1Followers and following count */}
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
            <Typography variant="body1">
              <strong>{profileData.followersCount}</strong> followers
            </Typography>
            <Typography variant="body1">
              <strong>{profileData.followingCount}</strong> following
            </Typography>
          </Box>
          {/* section-2Tab-like buttons for different sections */}
          <AppBar position="static" color="default">
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              textColor="secondary"
              variant="fullWidth"
              aria-label="profile tabs">
              <Tab icon={<GridViewIcon />} aria-label="Posts" />
              <Tab icon={<PeopleIcon />} aria-label="Connections" />
            </Tabs>
          </AppBar>
        </Box>
        {/*  render content based on selected tab */}
        {tabValue === 0 && <ImageGrid />}

        {tabValue === 1 && <Connections />}
      </Paper>
    </Container>
  );
};

export default ProfilePage;
