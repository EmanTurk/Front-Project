import React from 'react';
import { Grid, Paper } from '@mui/material';

const ImageGrid = () => {
  // Array of image URLs, replace with actual data from your backend
  const images = [
    "/path-to-image-1.jpg",
    "/path-to-image-2.jpg",
    // ... more images
  ];

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={4} key={index}>
          <Paper
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              height: 200,
              borderRadius: 2
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGrid;
