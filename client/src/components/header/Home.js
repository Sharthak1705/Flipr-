import React from 'react';
import logo from '../assets/image/logo.svg';
import About from '../header/About.jsx'
import Project from '../header/Projects.js';
import Client from '../header/Client.js';
import Footer from './footer.js'
import ListingProcess from './listing.js';
import Choice from './Choice.jsx'
import Layout from './layout.jsx';
import Landing from './landing.js';
import ImagePage from './Image.js';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-blue-200 shadow-md">
        <div className="w-90 h-10">
          <img src={logo} alt="Logo" className="object-cover w-full h-full" />
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-12">
          <a href="#home" className="text-gray-700 font-medium hover:text-red-500 transition duration-300">Home</a>
          <a href="#services" className="text-gray-700 font-medium hover:text-red-500 transition duration-300">Services</a>
          <a href="#about" className="text-gray-700 font-medium hover:text-red-500 transition duration-300">About</a>
          <a href="#projects" className="text-gray-700 font-medium hover:text-red-500 transition duration-300">Projects</a>
          <a href="#contact" className="text-gray-700 font-medium hover:text-red-500 transition duration-300">Contact</a>
        </div>
      </nav>
      <div className="pt-20">
       <Landing/>
        <Choice />
        <Layout />
        <ImagePage />
        <About />
        <Project />
        <Client />
        <ListingProcess />
        <Footer />
      </div>
           
      {/* Add additional content here as needed */}
    </div>
  );
}

export default LandingPage;
