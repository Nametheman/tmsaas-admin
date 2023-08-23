import React, { useState } from "react";
import mtn from "../../Image/dstv.png"
import glo from "../../Image/Gotv.png"
import airtel from "../../Image/myTv.png"
import mobile from "../../Image/startimes.png"
import adbiller from "../../Image/adbiller.png"
import BillerModal from "./BillerModal";
import ServiceModal from "../Biller/ServicesModal";

const Cable = () => {
    const [bmodal, setModal] = useState(false);
  const [smodal, setSmodal] = useState(false);

  return (
    <div>
        {/* <article > */}
        {/* <div className="subservices"><button>DATA</button> <button>AIRTIME</button> <button>ELECTRICITY</button> <button>INTERNET</button> <button>CABLE TV</button> <button>WAEC PIN</button></div>
    </article>
    <label>Select Biller:</label> */}
    <article className='biller'>
       
        <div onClick={()=>setSmodal(true)}>
        <img className='img'  src={mtn} alt="" />
        </div>
        <div onClick={()=>setSmodal(true)}>
        <img className='img'  src={glo} alt="" />
        </div>
        <div onClick={()=>setSmodal(true)}>
        <img className='img'  src={airtel} alt="" />
        </div>
        <div onClick={()=>setSmodal(true)}>
        <img className='img' src={mobile} alt="" />
        </div>
        <div>
        <img
         onClick={() => {
            setModal(true);
          }}
        className='adbiller' src={adbiller} alt=""/>
</div>
    </article> 
    {smodal && <ServiceModal cancelModal={setSmodal}/> }
    {bmodal && <BillerModal cancelModal={setModal} />}
    </div>
  )
}

export default Cable