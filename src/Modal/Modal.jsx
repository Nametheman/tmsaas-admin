import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import styled from 'styled-components'

const Modal = ({cancelModal}) => {
  return (
<ModalWrapper>
    <section className='overlay'>
        <article className='white'>
           < AiOutlineCloseCircle onClick={()=>{cancelModal(false)}} className='m-icon'/>
           <h2>Clients Breakdown </h2>

           <ul className='m-list'>
            <li>Clients Today: 2</li>
            <li>Clients this Week: 20</li>
            <li> Client this month: 100</li>
           </ul>
<button>View All Clients</button>
        </article>
    </section>
    </ModalWrapper>
  )
  
}
const ModalWrapper = styled.div`
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
.white{
    /* display: flex; */
    /* flex-direction: column; */
    background-color:white;
    height: 40%;
    width: 30%;
    border-radius: 4px;
    padding: 20px;
}
.white h2{
text-align: center;
}
.m-icon{
    float: right;
    font-size:30px;
    font-weight: 100;
    color: gray;
    /* display: flex;
    justify-content: flex-end, */
}
.m-list, ul, li{
   list-style: none; 
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   gap: 10px;
 
}
.white button {
    color: white;
    background-color:#28D1FF;
    border-radius: 4px;
    border: 1px solid #f5f5f5;
    outline: none;
    padding: 8px;
    margin-block:8px;
    /* margin-inline: ; */
}
`

export default Modal