import React, { useState } from 'react';
import { GoBell } from "react-icons/go";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home', current: true },
    { name: 'About Us', href: '#aboutus', current: false },
    { name: 'Contact', href: '#contact', current: false },
    { name: 'Footer', href: '#footer', current: false },
  ];

  return (
    <nav className='flex items-center justify-between flex-wrap bg-slate-800 h-16 px-6 sm:px-6 lg:px-8 shadow-md'>
      <div className='cursor-pointer text-white font-bold text-lg'>LOGO</div>
      <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className={`px-3 py-2 rounded-md text-sm font-medium  ${item.current ? 'bg-gray-900 text-white line-clamp-2' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`} 
                  >
                    {item.name}
                  </a>
                ))}
      </div>

      <div className="flex items-center pr-4 gap-4">
        <button 
          className="bg-transparent p-1 rounded-full text-gray-400 text-lg   hover:ring-white hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800" 
          aria-label="View notifications"
        >
          <GoBell className=''/>
        </button>

        <div className="ml-3 relative">
          <div>
            <button 
              onClick={() => setProfileMenuOpen(!profileMenuOpen)} 
              className="bg-gray-800 flex text-sm rounded-full hover:ring-white hover:ring-2 hover:ring-offset-2 hover:ring-offset-gray-800"
            >
              <img 
                className="h-8 w-8 rounded-full" 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Profile" 
              />
            </button>
          </div>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );

};

export default NavBar;
