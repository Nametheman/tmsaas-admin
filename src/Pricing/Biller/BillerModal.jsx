import React from 'react'
import styled from 'styled-components'
import {RxCross2 } from "react-icons/rx"

const BillerModal = ({cancelModal}) => {
  return (
    <Biller> 
    <div className="overlay">
    <div className="p-content">
    < RxCross2 onClick={()=>{cancelModal(false)}} className='m-icon'/>
<p>NEW BILLER</p>
<article className="password-content">
<div className='password'>
<label>BILLER NAME</label>
<input type="text" placeholder=" Enter Biller Name"/>
</div>

<div className='password'>
<label>CATEGORY</label>
<input type="text" placeholder="Enter Biller Category"/>
</div>
<div className='content-length'>
<label>DESCRIPTION</label>
<textarea name="comment" form="usrform" placeholder="Enter Description"></textarea>
</div>
<button className='pservice-btn'>CREATE BILLER</button>
</article>
   
    </div>
</div>
</Biller>
  )
}

const Biller=styled.div`
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
    height: 75%;
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

.content-length{
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.content-length textArea{
    /* height: 80px; */
    height: 15vh;
}
.content-length textArea::placeholder{
    font-size:10px;
    color: #afaeae;
    /* display: flex;
    justify-content: flex-start; */

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
    padding: 10px 80px;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
   margin-block: 2px;
    /* justify-content: center; */
}

`
export default BillerModal