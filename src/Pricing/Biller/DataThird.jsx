import React, { useState } from "react";
// import mtn from "../../Image/mtn.png";
// import glo from "../../Image/glo.png";
// import airtel from "../../Image/airtel.png";
// import mobile from "../../Image/9mobile.png";
// import adbiller from "../../Image/adbiller.png";
import Airtime from "./Airtime";
import Datas from "./Data";
import Electricity from "./Electricity";
import Internet from "./Internet";
import Cable from "./Cable";
import styled from "styled-components";
import Waec from "./Waec";

const Data = () => {
  const [show, setShow] = useState(true);
  const [airtime, setAirtime] = useState(false);
  const [electricity, setElectricity] = useState(false);
  const [internet, setInternet] = useState(false);
  const [cable, setCable] = useState(false);
  const [waec, setWaec] = useState(false);
  return (
    
<Tparty>
    <div >

      <div>   
      <label className="subservice">Subservices:</label>
      <article  >
        <div className="subservices"  style={{cursor:"pointer"}}>
          <button
            onClick={() => {
              setShow(true);
              setAirtime(false);
              setInternet(false);
              setElectricity(false);
              setCable(false);
            }}
            style={{background:show ? "#28D1FF":"transparent", color: show? "#fff":"#000" ,cursor:"pointer"}}
          >
            DATA
          </button>
          <button
            onClick={() => {
              setAirtime(true);
              setShow(false);
              //  setAirtime(false)
              setInternet(false);
              setElectricity(false);
              setCable(false);
            }}
            style={{background:airtime ? "#28D1FF":"transparent", color: airtime? "#fff":"#000", cursor:"pointer" }}

          >
            AIRTIME
          </button>
          <button
            onClick={() => {
              setElectricity(true);
              setShow(false);
              setAirtime(false);
              setInternet(false);
              //   setElectricity(false)
              setCable(false);
            }}
            style={{background:electricity? "#28D1FF":"transparent", color: electricity? "#fff":"#000", cursor:"pointer" }}
          >
            ELECTRICITY
          </button>{" "}
          <button
            onClick={() => {
              // setInternet(!internet)
              setShow(false);
              setAirtime(false);
              setInternet(true);
              setElectricity(false);
              setCable(false);
            }}
            style={{background:internet ? "#28D1FF":"transparent", color: internet? "#fff":"#000" , cursor:"pointer"}}
          >
            INTERNET
          </button>{" "}
          <button
            onClick={() => {
              setInternet(false)
              setCable(true)
              setShow(false)
              setAirtime(false)
              setElectricity(false)
              //   setCable(false);
            }}
            style={{background:cable ? "#28D1FF":"transparent", color: cable? "#fff":"#000", cursor:"pointer" }}
          >
            CABLE TV
          </button>
          <button 
          onClick={()=>{

            setWaec(true)
            setInternet(false)
            setCable(false)
            setShow(false)
            setAirtime(false)
            setElectricity(false)
          }}
          style={{background:waec ? "#28D1FF":"transparent", color: waec? "#fff":"#000" , cursor:"pointer"}} >WAEC PIN</button>
        </div>
       </article>
       </div>

       <div className="select-biller"  style={{cursor:"pointer"}}>
      <label>Select Biller:</label>

       </div>

{/* 
      <article className="biller">
        <div>
          <img className="img" src={mtn} alt="" />
        </div>
        <div>
          <img className="img" src={glo} alt="" />
        </div>
        <div>
          <img className="img" src={airtel} alt="" />
        </div>
        <div>
          <img className="img" src={mobile} alt="" />
        </div>
        <div>
          <img className="adbiller" src={adbiller} alt="" />
        </div> 
      </article> */}
      {show && <Datas/>}
      {airtime && <Airtime />}
      {internet && <Internet />}
      {cable && <Cable />}
      {electricity && <Electricity />}
      {waec && <Waec />}
    </div>
    </Tparty>
  );
};

const Tparty=styled.div`
  .subservices{
    padding-block: 20px;
  }

  .subservice{
    padding-block: 15px;
  }
  .subservices button{
    padding: 11px 20px;
  }

  .select-biller{
    margin-top: 20px;
    padding-block: 10px;
  }
`
export default Data;
