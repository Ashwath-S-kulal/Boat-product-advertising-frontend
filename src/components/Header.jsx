import React from 'react'
import boatLogo from '../assets/boat logo.png';
import {Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='bg-slate-300 sticky top-0 '>
      <div className='flex justify-between p-3 mx-40 items-center'>
        <a href='#home'><img src={boatLogo} alt="logo" className='h-10'/></a>
        <sec className='flex gap-5 font-semibold text-[18px] '>
          <a href='#home' className='text-gray-700 hover:text-blue-500 cursor-pointer'>Home</a>
            <a href='#features' className='text-gray-700 hover:text-blue-500 cursor-pointer'>Features</a>
            <a href='#about' className='text-gray-700 hover:text-blue-500 cursor-pointer'>About</a>
            <a href='#footer' className='text-gray-700 hover:text-blue-500 cursor-pointer'>Contact</a>
      </sec>
      </div>
    </nav>
  )
}

export default Header
