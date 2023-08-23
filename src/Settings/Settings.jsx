import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar'
import Password from './Password'
import styled from 'styled-components'

const Settings = () => {
    const [show, setShow]=useState(false)
  return (
    <SettingWrapper>
    <section className="container">
        <Sidebar/>
        <section className="homepage">
<Navbar/>
<article className="S-container">
    <div className="s-head">
        <span className="s-title">Settings</span>
        <span className='s-desc'>please Change your password as an Admin</span>
    </div>
    <div className='settings-menu'>
        <p onClick={()=>{setShow(!show)}} style={{cursor:"pointer"}}  >Change Password</p>
        <p style={{cursor:"pointer"}}>Commission</p>
        <p style={{cursor:"pointer"}}>Price Configuration</p>
    </div>
</article>
{show && <Password cancelModal={setShow}/>}

        </section>

    </section>
    </SettingWrapper>
  )
}
const SettingWrapper =styled.div`
 .S-container{
        box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    background: #fff;
    padding: 10px;
    border-radius: 6px;
    margin: 20px;
    height: 100vh;
    }
   .s-head{
    display: flex;
    flex-direction:column;
    gap: 8px;
    margin-block:20px ;
    padding: 10px;
    border-bottom:1px solid #e3e3e3;
   }
   .s-title{
    font-size: 24px;
    font-weight:600;
   }
   .s-desc{
font-size: 13px;
   }
   .settings-menu p{
    border: 1px solid #dfdfdf;
    padding: 15px;
    font-weight: 600;
    /* font-size: 24px; */
   }
   .setting-menu{
    padding: 10px;
   }

`

export default Settings