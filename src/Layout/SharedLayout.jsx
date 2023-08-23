import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar'


const SharedLayout = () => {
  return (
    <>
        <Sidebar/>
        <Navbar/>
        <Outlet/>
      
    </>
  )
}

export default SharedLayout
