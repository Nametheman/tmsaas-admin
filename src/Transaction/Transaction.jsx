import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar'
import csv from "../Image/csv.png"
import  "../Transaction/transaction.css"
import Debit from './Debit'
import Credit from './Credit'
import {CgArrowsH} from "react-icons/cg"


const Transaction = () => {
  const [debit, setDebit] = useState(true)
  const [credit, setCredit] = useState(false)
  return (
    <div className='container'>
    <Sidebar/>
    <section className='homepage'>
        <Navbar/>
{/*  */}
        <section className='C-container'>
            <article className='client-head'>
            <div className="client-header">
<span className="spanA">Clients</span> 
<span className='p'>The list below consist of all the clients on the platform</span>
</div>
<article className='T-right'>
<div className="input">
<div className='input-group' style={{cursor:"pointer"}}> <label style={{cursor:"pointer"}}>Start-date</label><input type='date' placeholder="Start Date" style={{cursor:"pointer"}}/> </div> <CgArrowsH className="btn-icon"/>
<div className='input-group' ><label style={{cursor:"pointer"}}>End date</label> <input type='date' placeholder="End Date" style={{cursor:"pointer"}}/></div>

</div>
<span className='csv' style={{cursor:"pointer"}}>
     <img src={csv} alt="calendar"/> <p>
Export Report
        </p>
</span>
</article>          
  </article>
<ul className='cards'>
  {/* <RouterProvider router={router}/> */}
<p onClick={()=>{
  setDebit(true)
  setCredit(false)
}}
style={{color:debit ? "#28D1FF":"gray", borderBottom:debit?"2px solid #28D1FF":"none", cursor:"pointer"}}>Debits</p> 

<p onClick={()=>{
  setCredit(true)
  setDebit(false)
}}
style={{color:credit ? "#28D1FF":"gray", borderBottom:credit?"2px solid #28D1FF":"none", cursor:"pointer"}}
>Credits </p>
</ul>
{credit &&<Credit/>}
{debit &&<Debit/>}




{/* Table */}

        </section>
    </section>
</div>
  )
}

export default Transaction
