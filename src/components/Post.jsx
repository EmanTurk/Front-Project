import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar } from '@mui/material';

const Post = ({ post }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar src={post.userAvatar} alt={post.username} />}
        title={post.username}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        height="360" 
        image={post.imageUrl}
        alt="Post image"
        sx={{ 
          maxWidth: 900, // Max width
          objectFit: 'contain', // to avoid cropping this Ensures the whole image fits 
          margin: 'auto', // Centers the image horizontally
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
