import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import ServiceModal from "../Services/ServiceModal";
import styled from "styled-components";
// import EditService from './EditService'
import EditService from "../Services/EditService";

// import ServiceModal
//
const Services = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [newService, setNewService] = useState(false);
  const [editService, setEditService] = useState(false);

  // const showService=()=>{
  //     setShow(true);
  // }
  return (
    <Service>
      <div className="container">
        <Sidebar />
        <section className="homepage">
          <Navbar />
          <section className="main-container">
            <article className="client-head">
              <div className="client-header">
                <span className="spanS">Services</span>
                <span className="p">
                  This is the summary of the services rendered to clients and
                  users.
                </span>
              </div>
              <article
                className="T-right"
                onClick={() => {
                  setNewService(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <span className="rgt">
                  {" "}
                  Add Service <AiOutlinePlus />
                </span>
              </article>
            </article>
            {/*  */}
            {newService && <ServiceModal cancelModal={setNewService} />}
            {/* <ServiceModal/> */}
            {editService && <EditService cancelModal={setEditService} />}

            <div
              className="ser"
              onClick={() => {
                return setShow(!show);
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="hd">
                <p>THIRD PARTY SERVICE</p> <AiFillCaretDown />
              </span>

              <section>
                {show && (
                  <article style={{ display: "flex", flexDirection: "column" }}>
                    <div className="s-dropdown">
                      <div className="lft-s">
                        <p className="sn">
                          <strong>Summary</strong>
                          <span>Third Party Service</span>
                        </p>
                        <p className="sn">
                          <strong>Description</strong>{" "}
                          <span>Third Party Service</span>
                        </p>
                        <p className="sn">
                          <strong>Documentation</strong>{" "}
                          <span>
                            <a href="/">Saasadmin.tm30.net</a>
                          </span>
                        </p>
                      </div>
                      <div className="right-s">
                        <p className="sn">
                          <strong>How To Use</strong>
                          <span>Third Party Service</span>
                        </p>
                        <p className="sn">
                          <strong>Features and Sub-services</strong>
                          <span className="F-btn">
                            <button>Airtime</button>
                            <button>Data</button> <button>cable tv</button>
                            <button>Electricity</button>
                          </span>
                        </p>
                        <p className="sn">
                          <strong>Pricing</strong> <span>----------</span>
                        </p>
                      </div>
                    </div>
                    <span
                      className="s-btn"
                      onClick={() => {
                        setEditService(true);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      EDIT SERVICE
                    </span>
                  </article>
                )}
              </section>
            </div>
            {/*  */}
            <div
              className="ser"
              onClick={() => {
                setShow1(!show1);
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="hd">
                <p style={{ cursor: "pointer" }}>PAYMENT SERVICE</p>{" "}
                <AiFillCaretDown />
              </span>

              {/* style={{display: 'grid',
    alignItems:"center",
    gap:"20px",
    gridTemplateColumns:"repeat(2,1fr)"}} */}
              <section>
                {show1 && (
                  <article style={{ display: "flex", flexDirection: "column" }}>
                    <div className="s-dropdown">
                      <div className="lft-s">
                        <p className="sn">
                          <strong>Summary</strong>
                          <span>Payment Service</span>
                        </p>
                        <p className="sn">
                          <strong>Description</strong>{" "}
                          <span>
                            TPayment services configured for either card or USSD
                            payments
                          </span>
                        </p>
                        <p className="sn">
                          <strong>Documentation</strong>{" "}
                          <span>
                            <a href="/">.com</a>
                          </span>
                        </p>
                      </div>
                      <div className="right-s">
                        <p className="sn">
                          <strong>How To Use</strong>
                          <span>Third Party Service</span>
                        </p>
                        <p className="sn">
                          <strong>Features and Sub-services</strong>
                          <span className="F-btn">
                            <button>Card</button> <button>USSD</button>
                          </span>
                        </p>
                        <p className="sn">
                          <strong>Pricing</strong> <span></span>
                        </p>
                      </div>
                    </div>
                    <span
                      className="s-btn"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditService(true);
                      }}
                    >
                      EDIT SERVICE
                    </span>
                  </article>
                )}
              </section>
            </div>
            {/*  */}
            <div
              className="ser"
              onClick={() => {
                setShow2(!show2);
              }}
              style={{ cursor: "pointer" }}
            >
              <span className="hd">
                <p>NOTIFICATION SERVICE</p> <AiFillCaretDown />
              </span>

              {/* style={{display: 'grid',
    alignItems:"center",
    gap:"20px",
    gridTemplateColumns:"repeat(2,1fr)"}} */}
              <section>
                {show2 && (
                  <article style={{ display: "flex", flexDirection: "column" }}>
                    <div className="s-dropdown">
                      <div className="lft-s">
                        <p className="sn">
                          <strong>Summary</strong>
                          <span>Notification Services</span>
                        </p>
                        <p className="sn">
                          <strong>Description</strong>{" "}
                          <span>Notification Services</span>
                        </p>
                        <p className="sn">
                          <strong>Documentation</strong>{" "}
                          <span>
                            <a href="/">.com</a>
                          </span>
                        </p>
                      </div>
                      <div className="right-s">
                        <p className="sn">
                          <strong>How To Use</strong>
                          <span>Third Party Service</span>
                        </p>
                        <p className="sn">
                          <strong>Features and Sub-services</strong>
                          <span className="F-btn">
                            <button>SMS</button>
                            <button>Email</button> <button>Whatsapp</button>
                            <button>Telegram</button>
                          </span>
                        </p>
                        <p className="sn">
                          <strong>Pricing</strong> <span>----------</span>
                        </p>
                      </div>
                    </div>
                    {/* {editService && <EditService cancelModal={setEditService}/>} */}
                    <span
                      className="s-btn"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditService(true);
                      }}
                    >
                      {" "}
                      EDIT SERVICE
                    </span>
                  </article>
                )}
              </section>
            </div>
          </section>
        </section>
      </div>
    </Service>
  );
};

const Service = styled.div`
  .spanS {
    font-size: 22px;
  }
  .rgt {
    display: flex;
    gap: 10px;
    align-items: center;
    color: #28d1ff;
    font-weight: 550;
    border: 1px solid #28d1ff;
    border-radius: 4px;
    padding: 10px;
  }
  .ser {
    /* border: 1px solid #8eeeff89; */
    border-radius: 4px;
  }
  .hd {
    display: flex;
    /* gap: 10px; */
    justify-content: space-between;
    align-items: center;
    color: #28d1ff;
    font-weight: 550;
    border: 1px solid #28d1ff;
    border-radius: 4px;
    padding: 10px;
  }
  .s-dropdown {
    padding: 3px 20px;
    display: flex;
    gap: 70px;
    align-items: center;
    /* justify-content: space-evenly; */
  }
  .sn {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: left;
  }
  .sn button {
    background: #28d1ff;
    border: 1px solid #28d1ff;
    border-radius: 4px;
    padding: 6px;
    color: white;
  }
  .s-btn {
    margin: auto;
    text-decoration: none;
    background: #28d1ff;
    border: 1px solid #28d1ff;
    border-radius: 6px;
    /* display:flex; */
    width: 65%;
    text-align: center;
    padding: 10px;
    color: white;
  }
  .sn a {
    color: #28d1ff;
  }
  .F-btn {
    display: flex;
    gap: 10px;
    color: white;
  }
  .ser {
    display: flex;
    flex-direction: column;
    padding-block: 20px;
  }
`;

export default Services;
