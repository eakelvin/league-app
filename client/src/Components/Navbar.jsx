import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './AuthLogin';
import Profile from './AuthProfile';
import LogoutButton from './AuthLogout';
import { useAuth0 } from '@auth0/auth0-react';
import DropdownButton from './Dropdown';

function Header() {
  const { isLoading, error, isAuthenticated} = useAuth0()

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to='/' className="flex items-center">
            <img src="./ball.jpg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EA League</span>
          </Link>
          <div className="flex items-center">
            {/* <DropdownButton /> */}
            {/* <a href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a> */}
            {/* <Link to='/login' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link> */}
            <div className='flex justify-end items-center'>
            {/* {error && <p>Authentication Error</p>}
              {isLoading && !error && <p>Loading...</p>}
              {isAuthenticated && !isLoading && (
                <>
                  <span className='pr-5'><Profile /></span>
                  <LogoutButton />
                </>
              )}
              {!isAuthenticated && !isLoading && (
                <LoginButton />
              )} */}

              {error && <p>Authentication Error</p>}
              {!error && isLoading && <p>Loading...</p>}
              {!error && !isLoading && (
                <>
                  <span className='pr-5'><Profile /></span>
                  {isAuthenticated ? <LogoutButton /> : <LoginButton /> }
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              {/* <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
              </li> */}
              {/* <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Company</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
