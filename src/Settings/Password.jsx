import React from 'react'
import styled from 'styled-components'
import {RxCross2 } from "react-icons/rx"

const Password = ({cancelModal}) => {
  return (
    <PasswordWrapper>
    <div className="overlay">
        <div className="p-content">
        < RxCross2 onClick={()=>{cancelModal(false)}} className='m-icon'  />
   <p>Change Password</p>
<article className="password-content">
    <div className='password'>
<label>Old Password</label>
<input type="text" placeholder=" Enter old Password"/>
    </div>

    <div className='password'>
<label>New Password</label>
<input type="text" placeholder="Enter New Password"/>
    </div>
    <button className='pservice-btn'>CREATE PASSWORD</button>
    </article>
       
        </div>
    </div>
    </PasswordWrapper>
  )
}

const PasswordWrapper =styled.div`
    .overlay{
        background-color: rgba(0, 0, 0, 0.425);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: linear .3s;
    }

    .p-content{
        background-color:white;
    height: 55%;
    width: 30%;
    border-radius: 6px;
    padding: 15px;   
    }

.m-icon{
    float: right;
    font-size:30px;
    font-weight: 100;
    color: gray;
    /* display: flex;
    justify-content: flex-end, */
}

.password{
    display: flex;
    flex-direction: column;
    gap: 2px;

}
.password input{
    padding: 10px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
}

.password-content{
    display: flex;
    flex-direction: column;
    /* justify-content:space-between; */
    gap: 20px;
    
}
.password input::placeholder{
    font-size:10px;
    color: #afaeae;
}
.p-content p{
text-align: center;
font-size: 24px;
color: #28D1FF;
font-weight: 600;
/* margin-block:40px; */
}
.password label{
    font-weight: bold;
}

.pservice-btn{
    align-self: center;
    background:#28D1FF;
    color: #fff;
    padding: 10px 50px;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
   margin-block: 2px;
    /* justify-content: center; */
}


`

export default Password