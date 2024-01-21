import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup"; 
import SignIn from "./components/signin"; 
import ProfileSetup from "./components/profileSetup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} /> {/* Default route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profileSetup" element={<ProfileSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
