import React, { useState, useEffect } from 'react';
import Post from './Post';
import { Container } from '@mui/material';
import danny from '../assets/danny.jpg';
import sara from '../assets/sara.jpg'

const Feed = () => {
  const [posts, setPosts] = useState([]); // I have to replace with real data fetch

  useEffect(() => {
    // --Dummy data for now fetch--posts from backend or use dummy data
    const dummyPosts = [
        {
          id: 1,
          userAvatar: danny,
          username: "Danny",
          date: "January 24, 2024",
          imageUrl: danny,
          caption: "Loving these nature vibes! 🌳🌞 #nature",
          likes: 120,
          comments: [
            {
              username: "user2",
              comment: "Wow, looks amazing!"
            },
            {
              username: "user3",
              comment: "I wish I was there!"
            }
          ]
        },
        {
          id: 2,
          userAvatar: sara,
          username: "Sara",
          date: "January 23, 2024",
          imageUrl: "https://placeimg.com/640/480/city/1",
          caption: "City lights and starry nights 🌃",
          likes: 95,
          comments: [
            {
              username: "user1",
              comment: "Beautiful view!"
            }
          ]
        },
        {
          id: 3,
          userAvatar: "https://placeimg.com/64/64/people/3",
          username: "user3",
          date: "January 22, 2024",
          imageUrl: "https://placeimg.com/640/480/tech/1",
          caption: "Working on my new project! #developerLife",
          likes: 150,
          comments: []
        }
      ];
      
    setPosts(dummyPosts);
  }, []);

  return (
    <Container>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Container>
  );
};

export default Feed;
