import React,{useState} from 'react'
import mtn from "../../Image/Swift.png"
// import mtn from "./Image/mtn.png"
import glo from "../../Image/ipNX.png"
import airtel from "../../Image/Fibre.png"
import mobile from "../../Image/spectraNet.png"
import adbiller from "../../Image/adbiller.png"
import BillerModal from "./BillerModal";
import ServiceModal from "../Biller/ServicesModal";

const Internet = () => {
    const [bmodal, setModal] = useState(false);
    const [smodal, setSmodal] = useState(false);
  return (
    <div>
  {/* <label>Subservices:</label>
<article >
    <div className="subservices"><button>DATA</button> <button>AIRTIME</button> <button>ELECTRICITY</button> <button>INTERNET</button> <button>CABLE TV</button> <button>WAEC PIN</button></div>
</article> */}
{/* <label>Select Biller:</label> */}
<article className='biller'   style={{cursor:"pointer"}}>
   
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
    <div >
    <img
     onClick={() => {
        setModal(true);
      }} className='adbiller' src={adbiller} alt=""/>
</div>
{bmodal && <BillerModal cancelModal={setModal} />}
{smodal && <ServiceModal cancelModal={setSmodal}/> }
</article>
    </div>
  )
}

export default Internet