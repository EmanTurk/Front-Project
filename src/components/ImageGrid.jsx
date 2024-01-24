import React from 'react';
import { Grid, Paper, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ImageGrid = ({ profile }) => {
  const images = [
    "https://cdn.dribbble.com/userupload/12457651/file/original-d4ffc868f3b46ffd09fedc2ba5411fe7.png?resize=1504x1128",
    "https://cdn.dribbble.com/userupload/12457651/file/original-d4ffc868f3b46ffd09fedc2ba5411fe7.png?resize=1905x1429",
  ];

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={4} key={index}>
          {!profile && (
            <Paper
              sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                height: 200,
                borderRadius: 2
              }}
            />
          )}
        </Grid>
      ))}
      <Grid item xs={4}>
        <Paper
          sx={{
            height: 200,
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <IconButton
            sx={{
              color: '#EA67CB', // Your custom pink color
            }}
            aria-label="add a picture"
            component="span"
            onClick={() => { /* Your onClick handler here */ }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ImageGrid;
