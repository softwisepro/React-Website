import React, { useEffect, useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { AiOutlineApple, AiOutlineLeft, AiOutlineUser } from 'react-icons/ai';
import Landing from './Landing';
import client from '../client'
import userQuery from '../utils/data'


export const Home = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);

  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query)
      .then((data) => {
        setUser(data[0])
      })
  }, [])
  

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, [])


  return (
    <div className='flex flex-col bg-gray-50 md:flex-row h-screen transaction-height duration-75 ease-out'>
      <div className='hidden md-flex h-sreen flex-initial'>
        <Sidebar user={user && user}/>
        <Landing />
      </div>
      <div className='flex md:hidden flex-row'>
        <div className='p-5 flex flex-row w-full justify-between items-center border'>
          <div className='cursor-pointer p-2 border rounded-full' onClick={() => setToggleSidebar(true)}>
            <img src={user?.image} />
          </div>
          <Link
            to='/'
          >
            <AiOutlineApple fontSize={30} />
          </Link>
        </div>
        {toggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 transition-all duration-700'>
            <div className='absolute w-full justify-end items-center flex p-2'>
              <AiOutlineLeft fontSize={20} className='cursor-pointer mx-3 transition-all' onClick={() => setToggleSidebar(false)} />
            </div>
            <Sidebar user={user && user} closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      
      <div className='flex-1 pb-2 h-screen overflow-y-scroll' ref={scrollRef}>
        <Routes>
          <Route path='donate' />
          <Route path='/*' element={<Landing user={user && user} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home