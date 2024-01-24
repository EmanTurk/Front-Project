import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup"; 
import SignIn from "./components/signin"; 
import ProfileSetup from "./components/profileSetup";
import ProfilePage from "./components/profiles";
import ResponsiveNavBar from "./components/navbar";

function App() {
  return (
    <Router>
      <ResponsiveNavBar/>
      <Routes>
        <Route path="/" element={<Signup />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profileSetup" element={<ProfileSetup />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
