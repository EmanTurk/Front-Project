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
          caption: "New Profile Pic! To post it on LinkedIn? 🌞 #Professional",
          likes: 120,
          comments: [
            {
              username: "SaraB",
              comment: "Wow, looks amazing!"
            },
            {
              username: "Conny",
              comment: "I wish I was there!"
            }
          ]
        },
        {
          id: 2,
          userAvatar: sara,
          username: "Sara",
          date: "January 23, 2024",
          imageUrl: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          username: "Dani@b",
          date: "January 22, 2024",
          imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Working on my new project! #developerLife",
          likes: 150,
          comments: []
        },
        {
          id: 4,
          userAvatar: "https://images.unsplash.com/photo-1679679008383-6f778fe07828?q=80&w=2268&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          username: "ErenJeager",
          date: "January 20, 2024",
          imageUrl: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Pro life",
          likes: 150,
          comments: []
        },
        {
          id: 5,
          userAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          username: "Levi99900000",
          date: "March 10, 2024",
          imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          caption: "Office food???",
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
