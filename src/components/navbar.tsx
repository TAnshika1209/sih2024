"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Check if router is defined
    if (!router) {
      console.error("Router is not defined");
    }
  }, [router]);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  const handleProfileClick = () => {
    // Handle profile click (e.g., show dropdown)
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow-md p-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">HOLMES</div>

      {/* Search Bar */}
      <div className="flex-grow mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* User Profile Section */}
      <div className="relative">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleProfileClick}
        >
          {isLoggedIn ? (
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
              {username.charAt(0).toUpperCase()}
            </div>
          ) : (
            <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
              {/* Empty profile picture */}
            </div>
          )}
        </div>

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block">
          {!isLoggedIn ? (
            <>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={() => console.log('Profile clicked')}
            >
              Profile
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;