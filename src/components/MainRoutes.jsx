//This file used the useLocation hook, since I want to show the navbar in specific pages only and not all of them. It allows access to the pathname.

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Signup from './signup';
import SignIn from './signin';
import ProfileSetup from './profileSetup';
import ProfilePage from './profiles';
import ResponsiveNavBar from './navbar';

const MainRoutes = () => {
  const location = useLocation();

  const shouldShowNavbar = () => {
    const pathsWithoutNavbar = ['/signup', '/signin', '/profileSetup'];
    return !pathsWithoutNavbar.includes(location.pathname);
  };

  return (
    <>
      {shouldShowNavbar() && <ResponsiveNavBar />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profileSetup" element={<ProfileSetup />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
