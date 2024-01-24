import React from 'react';
import { Grid, Paper } from '@mui/material';

const ImageGrid = ({profile}) => {
  // ----replace with actual data from your backend
  const images = [
    "https://cdn.dribbble.com/userupload/12457651/file/original-d4ffc868f3b46ffd09fedc2ba5411fe7.png?resize=1504x1128",
    "https://cdn.dribbble.com/userupload/12457651/file/original-d4ffc868f3b46ffd09fedc2ba5411fe7.png?resize=1905x1429", //placeHolders for now
  ];
console.log(profile)
  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item xs={4} key={index}>
         {!profile && <Paper
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              height: 200,
              borderRadius: 2
            }}
          />}
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGrid;
