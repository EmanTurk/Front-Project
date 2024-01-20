import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup"; // Path to your Signup component
import SignIn from "./components/signin"; // Path to your SignIn component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} /> {/* Default route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
