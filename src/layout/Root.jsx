import React from 'react'
import LeftNav from '../components/LeftNav'
import { Outlet } from 'react-router'

function Root() {
  return (
    <>
      <div className="flex bg-black h-[100vh] text-white">
        <div className='w-3xs hidden md:block'>
          <LeftNav></LeftNav>
        </div>
        <div className="flex-1 items-center">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}

export default Root