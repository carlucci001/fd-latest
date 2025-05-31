import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black transition-colors duration-200">
      <Navbar />
      <main className="flex-grow pt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
