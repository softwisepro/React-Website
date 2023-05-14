import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { ioiosArrowForward } from 'react-icons/io';
import { AiOutlineApple, AiOutlineHome, AiOutlineSetting, AiOutlineUser } from 'react-icons/ai';

const Sidebar = ({ user, closeToggle }) => {

  const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out';
  const isActiveStyle = 'flex items-center px-5 text-blue-500 gap-3 font-bold hover:text-black transition-all duration-200 ease-in-out';

  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  return (
    <div className='flex flex-col h-full justify-between overflow-hidden min-w-219 transition-all'>
      <div>
        <div className='flex p-5 mt-10 pt-1 w-190 items-center justify-between'>
          <Link
            to='/'
            onClick={handleCloseSidebar}
          >
            <AiOutlineUser fontSize={40} className='cursor-pointer p-2 border rounded-full' />
          </Link>
          <Link
            to='/'
            onClick={handleCloseSidebar}
          >
            <AiOutlineSetting fontSize={20}/>
          </Link>
        </div>
        <div className='flex flex-col gap-5 px-2'>
          <NavLink
            to='home'
            className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
          >
            <AiOutlineHome fontSize={20}/><span className='text-xl'>Home</span>
          </NavLink>
          <NavLink
            to='profile'
            className={({ isActive }) => isActive ? isActiveStyle : isNotActiveStyle}
          >
            <AiOutlineUser fontSize={20}/><span>Profile</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar