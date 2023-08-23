import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "../Sidebar/sidebar.css";
import { BiArrowBack } from "react-icons/bi";
import notifications from "../Image/notifications.png";
import admin from "../Image/Admin.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgArrowsH } from "react-icons/cg";
import csv from "../Image/csv.png";
import ClientModal from "./ClientModal";
import commision from "../Image/commision.png";
import value from "../Image/value.png";
import DebitTransaction from "./DebitTransaction";
import { IoIosTrendingUp } from "react-icons/io";
import { BsEyeSlash } from "react-icons//bs";
import { BsEye } from "react-icons/bs";
import axios from "axios";

const ClientPage = () => {
  const [showStatus, setShowStatus] = useState(false);
  const [icon, setIcon] = useState(true);
  const [viewClients, setViewClients] = useState();
  const [debit, setDebit] = useState(true);
  const [credit, setCredit] = useState(false);
  const [metrics, setMetrics] = useState();
  let useDetails = JSON.parse(localStorage.getItem("userDetails"));
  const token = useDetails?.data?.data?.token;
  let userId = useDetails?.data?.data?.client?.userId;
  let getID = sessionStorage.getItem("clientID");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [count, setCount] = useState("");

  const clientCounts = async () => {
    await axios
      .get(
        `http://188.212.125.218:4457/v1/admin/dashboard/${getID}?range=year`,
        config
      )
      .then((res) => {
        setMetrics(res.data?.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const singleClients = async () => {
    await axios
      .get(`http://188.212.125.218:4457/v1/admin/getClient/${getID}`, config)
      .then((res) => {
        setViewClients(res?.data.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    singleClients();
    clientCounts();
  }, []);

  const toggleIcon = () => {
    setIcon(!icon);
  };
  return (
    <section className="container">
      <Sidebar />
      <section className="homepage">
        <ClientSpace>
          <nav className="Rnavbar">
            <NavLink to="/clients">
              <span className="lft-nav">
                {" "}
                <BiArrowBack className="back-icon" /> Back
              </span>
            </NavLink>
            <article className="right-Rnav">
              <div className="img-container">
                <img src={notifications} alt="" />
                <img src={admin} className="img-admin" alt="" />
              </div>
              <div className="Admin">
                <span className="span1">Administration</span>
                <span className="span2">Super Admin</span>
              </div>{" "}
            </article>
          </nav>
          <article className="main-container">
            <div className="client-space_header">
              <h1>{viewClients?.rest?.name}</h1>
              <article className="c-right">
                <div className="input">
                  <div className="input-group">
                    {" "}
                    <label>Start-date</label>
                    <input type="date" placeholder="Start Date" />{" "}
                  </div>{" "}
                  <CgArrowsH className="btn-icon" />
                  <div className="input-group">
                    <label>End date</label>{" "}
                    <input type="date" placeholder="End Date" />
                  </div>
                  {showStatus && (
                    <ClientModal
                      clientData={viewClients}
                      cancelModal={setShowStatus}
                    />
                  )}
                </div>
                <span className="csv">
                  <img src={csv} alt="calendar" /> <p>Download Report</p>
                </span>

                <span className="filter">
                  <p> Filter By: </p>
                  <select>
                    <option>Today</option>
                    <option>This week</option>
                    <option>This month</option>
                  </select>
                </span>
              </article>
            </div>
            <section>
              <ul className="li-group">
                <li className="list-group">
                  <div className="d-top1">
                    <span> U-balance</span>{" "}
                    <div onClick={toggleIcon}>
                      {" "}
                      {icon ? <BsEyeSlash /> : <BsEye />}
                    </div>
                  </div>
                  <div className="amount">
                    &#8358;
                    {icon ? "******************" : `${metrics?.ubalance}`}
                  </div>
                  <div className="action">
                    <span href="/#">Change Status</span>{" "}
                    <span
                      onClick={() => {
                        setShowStatus(true);
                      }}
                    >
                      Fund Wallet
                    </span>
                  </div>
                </li>
                <li className="list-group">
                  <div className="d-top">
                    <span> Total Transaction Count</span>
                    <img src={count} alt="" />
                  </div>
                  <div className="amount">{metrics?.totalTransactionCount}</div>
                  <div className="description">
                    {" "}
                    <span>
                      <IoIosTrendingUp
                        style={{ color: IoIosTrendingUp ? "green" : "red" }}
                      />{" "}
                    </span>{" "}
                    <span className="des">1.3 up from last week </span>
                  </div>
                </li>
                <li className="list-group">
                  <div className="d-top">
                    <span> Total Transaction Value</span>{" "}
                    <img src={value} alt="" />
                  </div>
                  <div className="amount">&#8358;{metrics?.totalValue}</div>
                  <div className="description">
                    {" "}
                    <span>
                      <IoIosTrendingUp
                        style={{ color: IoIosTrendingUp ? "green" : "red" }}
                      />{" "}
                    </span>{" "}
                    <span className="des">1.3 up from last week </span>
                  </div>
                </li>
                <li className="list-group">
                  <div className="d-top">
                    <span> Total Commission</span>{" "}
                    <img src={commision} alt="" />
                  </div>
                  <div className="amount">
                    &#8358;{metrics?.totalCommission}
                  </div>
                  <div className="description">
                    {" "}
                    <span>
                      <IoIosTrendingUp
                        style={{ color: IoIosTrendingUp ? "green" : "red" }}
                      />{" "}
                    </span>{" "}
                    <span className="des">1.3 up from last week </span>
                  </div>
                </li>
              </ul>
            </section>
            <div>
              <h2>Recent Transaction</h2>
              <ul className="cards">
                <p
                  onClick={() => {
                    setDebit(true);
                    setCredit(false);
                  }}
                  style={{
                    color: debit ? "#28D1FF" : "gray",
                    borderBottom: debit ? "2px solid #28D1FF" : "none",
                    cursor: "pointer",
                  }}
                >
                  Debits
                </p>

                <p
                  onClick={() => {
                    setCredit(true);
                    setDebit(false);
                  }}
                  style={{
                    color: credit ? "#28D1FF" : "gray",
                    borderBottom: credit ? "2px solid #28D1FF" : "none",
                    cursor: "pointer",
                  }}
                >
                  Credits{" "}
                </p>
              </ul>
              {debit && <DebitTransaction />}
            </div>
          </article>
        </ClientSpace>
      </section>
    </section>
  );
};
const ClientSpace = styled.div`
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

  .c-right {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .input {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .input label {
    font-size: 16px;
    margin-left: 8px;
  }
  .filter {
    display: flex;
    padding-top: 12px;
    padding-inline: 15px;
    align-items: center;
    gap: 5px;
  }
  .filter p {
    font-weight: 500;
  }

  .filter select {
    height: 25px;
    /* padding:2px 6px; */
  }
  .input input {
    padding: 6px;
    border-radius: 6px;
    border: 1px solid #d6d6d6;
  }
  .btn-icon {
    padding-top: 20px;
  }

  .csv {
    margin-block-start: 20px;
  }

  .client-space_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
  }
  .client-space_header h1 {
    font-size: 24px;
    font-weight: 700;
  }

  .list-group {
    padding: 5px;
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 15px;
  }
  .li-group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    gap: 10px;
    margin-block-start: 20px;
    margin-block-end: 45px;
  }
  .d-top img {
    height: 40px;
  }
  .action {
    display: flex;
    /* justify-content:space-between; */
    gap: 5px;
  }
  .action span {
    text-decoration: none;
    background: #28d1ff;
    color: #fff;
    border: 1px solid #28d1ff;
    border-radius: 4px;
    padding: 9px 6px;
    font-size: 14px;
    /* padding:2px ; */
  }

  .d-top span {
    font-size: 15px;
    color: #2b2b2ba9;
  }
  .amount {
    font-weight: bold;
    font-size: 24px;
  }

  .description {
    display: flex;
    /* align-items: center; */
    gap: 5px;
  }
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .d-top {
    display: flex;
    align-items: center;
    /* justify-content:space-between; */
    gap: 40px;
  }
  .des {
    font-size: 12px;
    font-weight: 550;
  }

  .d-top1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 40px; */
  }
`;

export default ClientPage;
