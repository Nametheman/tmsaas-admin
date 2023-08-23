import React, { useState } from 'react'
import Subservice from '../Subservice'
import CardBiller from '../CardBiller'
import styled from "styled-components";

const PaymentBiller = () => {
    const [show, setShow]=useState(true)
    const[ussd, setUssd]=useState(false)
  return (
    <Button>
    <div>
<h1>SubService:</h1>

        <div className="p-s">
            <a  href='#/'  onClick={()=>{   
            setUssd(true)
             setShow(false)
          
            }
          }
            
            style={{background:ussd? "#28D1ff" : "#fff", color: ussd? "#fff":"black", cursor:"pointer"}}
            > USSD</a>

            <a href='#/' onClick={()=>{
              setShow(true)
              setUssd(false)
          }}
               style={{background:show? "#28D1ff" : "#fff", color: show? "#fff":"black", cursor:"pointer"}}
            > CARD</a>
        </div>
        {ussd && <CardBiller/> }
        {show && <Subservice/>}
    </div>
    </Button>
  )
}


const Button=styled.div`
.p-s{
    display: flex;
    gap: 20px;
}
.p-s a{

    margin-block: 20px;
     text-decoration: none;
     border: 1px solid #28d1ff;
     border-radius: 4px;
     color: #000000;
 
     padding: 10px 40px;
}



`

export default PaymentBiller