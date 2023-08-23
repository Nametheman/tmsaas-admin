import React from 'react'
import  "../Transaction/transaction.css"
import {CgArrowsH} from "react-icons/cg"
import csv from "../Image/csv.png"

const Tinput = () => {
  return (
    <div>

<article className='T-right'>
<div className="input">
<div className='input-group'> <label>Start-date</label><input type='date' placeholder="Start Date"/> </div> <CgArrowsH className="btn-icon"/>
<div className='input-group'><label>End date</label> <input type='date' placeholder="End Date"/></div>

</div>
<span className='csv'>
     <img src={csv} alt="calendar"/> <p>
     Download CSV
        </p>
</span>
</article>   
    </div>
  )
}

export default Tinput