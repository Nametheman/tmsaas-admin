import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CallModal from "../Biller/CallModal";
import ContentModal from "../Biller/ContentModal";
import PercentageModal from "../Biller/PercentageModal";

const BillerService = ({ cancelModal }) => {
  const [call, setCall] = useState(false);
//   const [content, setContent] = useState(false);
//   const [percentage, setPercentage] = useState(false);
  const [signer, setSigner] = useState({
    call: "" 
    })
  console.log(call)

  const sending = (e) => {
        
    const {name, value} = e.target;
    // console.log(name,value)
    setSigner({
      ...signer, [name]: value
    })
  }
  return (
    <ServiceM>
      <div className="overlay">
        <div className="swhite">
          <AiOutlineCloseCircle
            onClick={() => {
              cancelModal(false);
            }}
            className="m-icon"
          />
          <p>PRICING</p>
          <section>
            <div>
              <select className="p-list"   
                  onChange={
                   (e) => sending(e)}  name='call'>
                <option value=""  disabled selected> Select Pricing  </option>
                <option

                value="call"
             
                  style={{
                    boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
                  }}
                >
                     Call  
                </option>
                <option

                value="content"
                  
                  className="option2"
                >
                  Content
                </option>
                <option
                value="percentage"
            
                  className="option3"
                >
                  Percentage
                </option>
              </select>
            </div>
          </section>

          { signer?.call==='call' && <CallModal cancelModal={setSigner} />}
          { signer?.call==="content" && <ContentModal cancelModal={setSigner}/>}
          { signer?.call==="percentage" && <PercentageModal cancelModal={setSigner} />}
        </div>
      </div>
    </ServiceM>
  );
};
const ServiceM = styled.div`
  .overlay {
    background-color: rgba(0, 0, 0, 0.425);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  /.e-contetn {
    /* display:flex; */
    /* flex-direction:column; */
  }
  select {
    width: 100%;
    padding: 10px;
  }

  .p-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .swhite {
    background-color: white;
    height: 45%;
    width: 35%;
    border-radius: 4px;
    padding: 15px;
  }

  .option1 {
    border: 1px solid #f5f5f5;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    /* background:red; */
    border-radius: 8px;
    /* margin-block: 20px; */
  }

  .swhite h2 {
    text-align: center;
    color: #28d1ff;
  }

  .m-icon {
    float: right;
    font-size: 30px;
    font-weight: 100;
    color: gray;
  }

  .e-btn {
    margin: auto;
    text-decoration: none;
    background: #28d1ff;
    border: 1px solid #28d1ff;
    border-radius: 6px;
    /* display:flex; */
    width: 100%;
    text-align: center;
    padding: 10px;
    color: white;
    align-self: center;
    margin-block: 10px;
    /* margin */
  }
`;

export default BillerService;
