import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import styled from 'styled-components'
const ModalB = ({cancelModal}) => {
  return (
    <div>
          
<ModalWrapper>
    <section className='overlay'>
        <article className='swhite'>
           < AiOutlineCloseCircle onClick={()=>{cancelModal(false)}} className='m-icon'/>
           <h2>Transactions Count </h2>

           <ul className='s-list'>
            <li> Transactions Today: <strong>20 </strong></li>
            <li>Transactions this Week:<strong>220 </strong></li>
            <li>Transactions this month: <strong>440</strong></li>
        
           </ul>
<button>View All Services</button>
        </article>
    </section>
    </ModalWrapper>
    </div>
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
.swhite{
    /* display: flex; */
    /* flex-direction: column; */
    background-color:white;
    height: 40%;
    width: 30%;
    border-radius: 4px;
    padding: 15px;
    /* margin: 10px; */
}
.swhite h2{
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
.s-list{
   list-style: none; 
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   gap: 10px;
   font-weight: 550;
 
}

.swhite button {
    color: white;
    background-color:#28D1FF;
    border-radius: 4px;
    border: 1px solid #f5f5f5;
    outline: none;
    padding: 8px;
    margin-block:15px;
    /* margin-inline: ; */
}
`
export default ModalB