import React from 'react'
import notifications from "./Image/notifications.png"
import admin from "./Image/Admin.png"
import "./Homepage/homepage.css"

const Navbar = () => {
  return (

    <nav className="navbar">
    <div className='img-container'>
    <img src={notifications} alt=""/><img src={admin} className='img-admin' alt=''/>  
    </div>
    <div className='Admin'>
        <span className='span1'>Administration</span>
        <span className='span2'>Super Admin</span>
    </div>
      </nav>
  )
}


export default Navbar