import React from "react";
import { useState } from "react";
import styled from "styled-components";

const NotiSubService = () => {
  // const [show, setShow] = useState(true);
  // const [mail, setMail] = useState(true);
  const [active, setActive] =useState(true)
  const [activeA, setActiveA] =useState(false)
  const [activeB, setActiveB] =useState(false)
  const [activeC, setActiveC] =useState(false)
  const handleClick =()=>{
    // if (active === true){

    //   setActive(!active)
    // }else{setActive(active)}

    // if(activeA === true){
    //   setActiveA(!activeA)
    // }else{
    //   setActiveA(false)
    // }
    // if(activeB === true){
    //   setActiveB(!activeA)
    // }else{
    //   setActiveB(false)
    // }

    // if(activeC === true){
    //   setActiveC(true)
    // }else{
    //   setActiveC(false)
    setActive(!active);
    // setActiveA(true)
    // setActiveB(true)
    // setActiveC(true)s
    }

  return (
    <Notification>
      <div>
        <p >Subservices</p>
        <div className="N-service">
          <span className="ns-btn"  onClick={()=>{
            setActiveA(false)
            setActiveB(false)
            setActiveC(false)
            setActive(true)
            

          }}
          style={{background:active? "#28D1ff" : "#fff", color: active? "#fff":"black", cursor:"pointer"}}
          >SMS</span>
         <span className="ns-btn" onClick={()=>{
        setActiveA(true)
        setActiveB(false)
        setActiveC(false)
        setActive(!active)
         }}
          style={{background:activeA? "#28D1ff" : "#fff", color:activeA? "#fff":"black", cursor:"pointer"}} >EMAIL</span>
          <span className="ns-btn" onClick={()=>{
            setActiveB(true)
          setActiveA(false)
          setActiveC(false)
          setActive(false)
          
          }}
          style={{background:activeB? "#28D1ff" : "#fff", color: activeB? "#fff":"#000", cursor:"pointer"}}>TELEGRAM</span>
          <span className="ns-btn" onClick={()=>{
            setActiveC(true)
            setActive(false)
            setActiveB(false)
            setActiveA(false)
          }}
          style={{background:activeC? "#28D1ff" : "#fff",color: activeC? "#fff":"black", cursor:"pointer" }}>WHATSAPP</span>{" "}
        </div>
      </div>
    </Notification>
  );
};

const Notification = styled.div`
  .N-service {
    display: flex;
    gap: 20px;
  }
  .ns-btn {
    margin-block: 20px;
    text-decoration: none;
    border: 1px solid #28d1ff;
    border-radius: 4px;
    color: #000000;
    padding: 5px 15px;
  }
  .ns-btn {
    margin-block: 20px;
    text-decoration: none;
    border: 1px solid #28d1ff;
    background: #28d1ff;
    border-radius: 4px;
    color: #000000;
    padding: 5px 15px;
  }
`;
export default NotiSubService;
