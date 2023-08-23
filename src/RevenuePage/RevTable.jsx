import React from 'react'
// import Input from './Input'
import ThirdPartyData from './Third-Party_Data'
import Tinput from '../Chart/Tinput'

const RevTable = () => {
  return (
    <section>
<article className="rev-top">  
<div><button>3rd Party</button> <button>Payment</button> <button>Notification</button></div>
      {/* <Input/> */}
      <Tinput/>
</article>
<ThirdPartyData/>
     
    </section>
  )
}

export default RevTable
