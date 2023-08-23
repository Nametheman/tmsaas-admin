import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
// import Data from './Data'
import Data from "./Biller/DataThird";
// import PaymentService from "./Payment/PaymentSe
import NotiSubService from "../Pricing/NotificationService/NotiSubService";
import PaymentBiller from "./Payment/PaymentBiller";


const Pricing = () => {
  const [show, setShow] = useState("Data");
  const [payment, setPayment] = useState(false);
  const [notification, setNotification] = useState(false);
  
  return (
    <Price>
      <div className="container">
        <Sidebar />
        <section className="homepage">
          <Navbar />
          <div className="p-container">
            <div className="P-head">
              <span className="Sp-head">Pricing</span>
              <span className="sp">pricing</span>
            </div>

            {/* <article> */}
            <div className="p-services">
              <span
                onClick={() => {
                  setShow(!show);
                  setNotification(false)
                  setPayment(false)
                }}
                
            style={{background:show ? "#28D1FF":"transparent", color: show? "#fff":"#000" , cursor:"pointer"}}
              >
                THIRD PARTY SERVICE
              </span>
              <span 
              onClick={() => {
                setPayment(!payment);
                setNotification(false)
                setShow(false)
              }}
              
          style={{background:payment ? "#28D1FF":"transparent", color: payment? "#fff":"#000", cursor:"pointer" }}
              >PAYMENT SERVICE</span>

              <span 
              
              onClick={() => {
                setNotification(true);
                setShow(false)
                setPayment(false)
              }}
              
          style={{background:notification ? "#28D1FF":"transparent", color: notification? "#fff":"#000" , cursor:"pointer"}}
              >NOTIFICATION SERVICE</span> <IoIosArrowForward />
            </div>
   
 <article className="biller">  
 {show && <Data />}


 </article>
 {payment && <PaymentBiller/>}
 {notification && <NotiSubService/>}
           
    
          </div>
        </section>
      </div>
    </Price>
  );
};

const Price = styled.div`
  .p-services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 10px;
    /* gap:20px; */
  }
  .p-services span{
    margin-block: 20px;
    text-decoration: none;
    border: 1px solid #28d1ff;
    border-radius: 4px;
    color: #000000;

    padding: 10px 40px;
  }
  .p-container{
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    margin: 20px;
    height: 70vh;
  }

  .biller{
    /* padding: 20px; */
  }
  .p-services a:hover,
  a:focus {
    background-color: #28d1ff;
    color: white;
  }
  .subservices {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
  }
  .subservices button {
    color: #fff;
    /* background-color:#28D1FF; */
    background-color: transparent;
    border: 1px solid #28d1ff;
    color: #000;
    border-radius: 5px;
    padding: 6px 14px;
    font-size: 12px;
  }
  .P-head {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-bottom: 1px solid #f5f5f5;
    padding: 10px;
  }
  .Sp-head {
    font-size: 18px;
    font-weight: 550;
  }
  .sp {
    font-size: 12px;
    font-weight: 490;
  }

  .biller {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .biller .img {
    height: 90px;
  }

  .adbiller {
    height: 50px;
  }
`;
export default Pricing;
