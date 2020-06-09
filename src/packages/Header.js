import DropDown from 'Packages/drop-down';
import HamburgerMenu from 'Packages/hamburger-menu';
import React from 'react';
import { Link } from 'react-router-dom';

import { covidTrackerLogo } from 'Utils/ImageUtil';

const Header = () => {
  const [open, setOpen] = React.useState(true);

  const onClickHandle = () => {
    setOpen(!open);
  };

  return (
    <header className='bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3'>
      <div className='flex items-center justify-between px-4 py-3 sm:p-0'>
        <div>
          <Link to='/'>
            <img className='h-8' src={covidTrackerLogo} alt='' />
          </Link>
        </div>
        <div className='sm:hidden'>
          <HamburgerMenu onToggle={onClickHandle} open={open} />
        </div>
      </div>
      <nav className={`${open ? 'block' : 'hidden'} sm:block`}>
        <div className='px-2 pt-2 pb-4 sm:flex sm:p-0'>
          <a href='/' className='block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800'>
            Register
          </a>
          <a
            href='/'
            className='mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2'
          >
            Sign In
          </a>
          <a
            href='/'
            className='mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2'
          >
            About
          </a>
          <DropDown />
        </div>
        <div className='px-4 py-5 border-t border-gray-800 sm:hidden'>
          <div className='flex items-center'>
            <img
              className='h-8 w-8 border-2 border-gray-600 rounded-full object-cover'
              src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80'
              alt='Your avatar'
            />
            <span className='ml-3 font-semibold text-white'>Tharushi De Silva</span>
          </div>
          <div className='mt-4'>
            <a href='/' className='block text-gray-400 hover:text-white'>
              Account settings
            </a>
            <a href='/' className='mt-2 block text-gray-400 hover:text-white'>
              Support
            </a>
            <a href='/' className='mt-2 block text-gray-400 hover:text-white'>
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
