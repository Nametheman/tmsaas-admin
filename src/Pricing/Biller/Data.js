import React, { useState } from "react";
import mtn from "../../Image/mtn.png";
import glo from "../../Image/glo.png";
import airtel from "../../Image/airtel.png";
import mobile from "../../Image/9mobile.png";
import adbiller from "../../Image/adbiller.png";
import BillerModal from "./BillerModal";
import ServiceModal from "../Biller/ServicesModal";

const Data = () => {
  const [bmodal, setModal] = useState(false);
  const [smodal, setSmodal] = useState(false);  

  return (
    <div>
      <article className="biller" style={{cursor:"pointer"}}>
        <div onClick={()=>setSmodal(true)}>
          <img className="img" src={mtn} alt="" />
        </div>
        <div onClick={()=>setSmodal(true)}>
          <img className="img" src={glo} alt="" />
        </div>
        <div onClick={()=>setSmodal(true)}>
          <img className="img" src={airtel} alt="" />
        </div>
        <div onClick={()=>setSmodal(true)}>
          <img className="img" src={mobile} alt="" />
        </div>
        <div>
          <img
            onClick={() => {
              setModal(true);
            }}
            className="adbiller"
            src={adbiller}
            alt=""
          />
        </div>
        {smodal && <ServiceModal cancelModal={setSmodal}/> }

        {bmodal && <BillerModal cancelModal={setModal} />}
      </article>
    </div>
  );
};

export default Data;
