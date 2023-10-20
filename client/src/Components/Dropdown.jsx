import React, { useState } from 'react';

import Profile from './AuthProfile';
import LogoutButton from './AuthLogout';
import { useAuth0 } from '@auth0/auth0-react';

const DropdownButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-center">
      <button
        id="dropdownDefaultButton"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={toggleDropdown}
      >
        dash
        <svg
          className={`w-2.5 h-2.5 ml-2.5 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {isDropdownOpen && <DropdownMenu />}
    </div>
  );
};

const DropdownMenu = () => {
    const { isLoading, error} = useAuth0()

  return (
    <div className="z-10 absolute mt-2 space-y-1 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <div>
              {error && <p>Authentication Error</p>}
              {!error && isLoading && <p>Loading...</p>}
              {!error && !isLoading && (
                <>
                  
                  <LogoutButton />
                  <Profile />
                </>
              )}
            </div>
        <li>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Dashboard
          </a>
        </li>
        {/* <li>
          <a href="#" className="block px-4 py-2 hover-bg-gray-100 dark-hover:bg-gray-600 dark-hover-text-white">
            Sign out
          </a>
        </li> */}
        <LogoutButton />
        <Profile />
      </ul>
    </div>
  );
};

export default DropdownButton;
