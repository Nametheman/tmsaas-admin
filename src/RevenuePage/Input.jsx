import React from 'react'
import styled from 'styled-components'
import csv from "../Image/csv.png"

const Input = () => {
  return (
    <InputWrapper>
     <div>
      <article className='T-right'>
<div className="input">
<input type='date' placeholder="Start Date"/> - <input type='date' placeholder="End Date"/>
</div>
<span className='csv'>
     <img src={csv} alt="calendar"/> <p>
     Download CSV
        </p>
</span>
</article>          
  {/* </article> */}
    </div>

      </InputWrapper>
  )
}

const InputWrapper =styled.div`
  
.T-right{
    display: flex;
    gap: 10px;
} 

.input input{
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #d6d6d6;
} 
`

export default Input
