import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

function Layout() {
  return (
    <div className='flex justify-center items-center h-[100%]' style={{ overflowY: "hidden" }}>
      <Outlet></Outlet>
      <Navigation></Navigation>
    </div>
  )
}

export default Layout
