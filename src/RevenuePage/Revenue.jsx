import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import notifications from "../Image/notifications.png";
import admin from "../Image/Admin.png";
import { BiArrowBack } from "react-icons/bi";
import Chart from "../Chart/Chart";
import "./revenue.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import RevData from "./RevData";

import Sthirdparty from "./ServiceRevPages/Sthirdparty";

const Revenue = () => {
  const [show4, setShow4] = useState(true);
  const [rev, setRev] = useState(false);
  // const [report, setReport] = useState(true);
  const [tabName, setTabName] = useState();
  // let reportTabName = JSON.parse(sessionStorage.getItem("reportTab"));
  // const [rev, setRev]=useState(true);
  // // const handleClick=()=>{
  //   setShow(!show)
  // }
  return (
    <RevenueContainer>
      <div className="container">
        <Sidebar />
        <section className="homepage">
          <nav className="Rnavbar">
            <span className="lft-nav">
              {" "}
              <Link to="/home">
                <BiArrowBack className="back-icon" />{" "}
              </Link>{" "}
              Back
            </span>
            <article className="right-Rnav">
              <div className="img-container">
                <img src={notifications} alt="" />
                <img src={admin} className="img-admin" alt="" />
              </div>
              <div className="Admin">
                <span className="span1">Administration</span>
                <span className="span2">Super Admin</span>
              </div>
            </article>
          </nav>
          <article className="main-container">
            <Chart />
          </article>

          <section className="main-container">
            <h2>
              <span>Revenue Report By All Service Type</span>{" "}
              {tabName && <span>({tabName})</span>}
            </h2>

            <div className="services-rev">
              {" "}
              <p
                className="service-t"
                onClick={() => {
                  setShow4(true);
                  setRev(!true);
                  setTabName();
                }}
                style={{
                  color: show4 ? "#28D1FF" : "gray",
                  borderBottom: show4 ? "2px solid #28D1FF" : "none",
                  cursor: "pointer",
                }}
              >
                Service Type Revenue Report
              </p>
              <p
                className="service-t"
                onClick={() => {
                  setShow4(!show4);
                  setRev(!rev);
                  setTabName("Third Party");
                }}
                style={{
                  color: rev ? "#28D1FF" : "gray",
                  borderBottom: rev ? "2px solid #28D1FF" : "none",
                  cursor: "pointer",
                }}
              >
                View All Services Revenue Report{" "}
              </p>
            </div>
            {show4 ? <RevData /> : <Sthirdparty setTabName={setTabName} />}
          </section>
        </section>
      </div>
    </RevenueContainer>
  );
};

const RevenueContainer = styled.div`
  .Rnavbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }
  .right-Rnav {
    display: flex;
    align-items: center;
  }
  .Rnavbar a {
    text-decoration: none;
    color: #000000;
  }
  .lft-nav {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
  }
  .back-icon {
    margin-top: 5px;
    font-size: 25px;
    font-weight: 600;
  }
`;
export default Revenue;
