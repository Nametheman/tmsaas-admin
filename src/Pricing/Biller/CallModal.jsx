import React from 'react'
import styled from 'styled-components'
import {AiOutlineCloseCircle} from "react-icons/ai"

const EditService = ({cancelModal}) => {
  return (
    
    <ServiceM>
<div className="overlay">   
      <div className="swhite">
      < AiOutlineCloseCircle onClick={()=>{cancelModal(false)}} className='m-icon'/>
           <h2>CALL:</h2>
           <section className="e-content">
<div className="e-input">
   
    <input type="text" placeholder="Input Price"/>
</div>

<button className="e-btn">SAVE CHANGES</button>

           </section>

      </div>
      </div>
  
    </ServiceM>
  )
}
const ServiceM=styled.div`
  
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
}
/.e-contetn{
    /* display:flex; */
    /* flex-direction:column; */
}

.swhite{

    background-color:white;
    height: 35%;
    width: 20%;
    border-radius: 4px;
    padding: 15px;
}
.e-input{
    display:flex;
    flex-direction:column;
    /* justify-content:space-between; */
    gap:5px;
    margin-bottom:14px;
}
.e-input input{
    padding:8px;
}


.swhite h2{
text-align: center;
color:#28d1ff
}

.m-icon{
    float: right;
    font-size:30px;
    font-weight: 100;
    color: gray;
    
}

.e-btn {
    margin: auto;
    text-decoration: none;
    background: #28D1FF;
    border: 1px solid #28D1FF;
    border-radius:6px;
    /* display:flex; */
    width: 100%;
    text-align: center;
    padding: 10px;
    color: white;
    align-self:center;
    margin-block:10px;
    /* margin */
}

`

export default EditService
