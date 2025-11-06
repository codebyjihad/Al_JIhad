import React from 'react'
import LeftNav from '../components/LeftNav'
import { Outlet } from 'react-router'

function Root() {
  return (
    <>
      <div className="flex bg-black text-white min-h-screen">
        <aside className="w-[280px] hidden md:block sticky top-0 h-screen bg-neutral-900 border-r border-neutral-800">
          <LeftNav />
        </aside>
        <main className="flex-1 overflow-y-auto">
          <div className="px-6 py-10">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default Root