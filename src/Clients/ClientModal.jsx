import React, { useState } from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import admin from "../Image/Admin.png";

const dayjs = require("dayjs");

const ClientModal = ({ cancelModal, clientData }) => {
  const [amount, setAmount] = useState({
    amounts: "",
  });

  let UseDetails = JSON.parse(localStorage.getItem("userDetails"));
  const token = UseDetails?.data?.data?.token;

  let getID = sessionStorage.getItem("clientID");

  const parsedData = () => {
    return dayjs(clientData?.client?.createdAt).format("DD/MM/YYYY");
  };

  const fundWallet = async (e) => {
    e.preventDefault();
    fetch(`http://188.212.125.218:4457/v1/admin/fundClient/${getID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(amount),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Wallet funding failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Wallet funded successfully:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const setting = (e) => {
    const { name, value } = e.target;
    setAmount({
      [name]: value,
    });
  };
  return (
    <Modalwrapper>
      <div className="overlay">
        <div className="modal-content">
          <RxCross1
            className="m-icon"
            onClick={() => {
              cancelModal(false);
            }}
          />
          <h1>Fund Wallet</h1>
          <article className="cl-head">
            {" "}
            <div className="client-img">
              <img src={admin} className="clientimage" alt="" />
              <div className="Admin">
                <span className="span1">{clientData?.client?.name}</span>
              </div>
            </div>
          </article>

          {/*  */}

          <article className="activities">
            <div className="activity">
              <span className="type">Date Joined:</span>{" "}
              <span>{parsedData()}</span>
            </div>
            <div className="activity">
              <span className="type">Activity Status:</span>
              <span
                style={
                  clientData?.client?.access === "granted"
                    ? { color: "green" }
                    : { color: "red" }
                }
              >
                {clientData?.client?.access === "granted"
                  ? "Active"
                  : "Inactive"}
              </span>
            </div>
            <div className="activity">
              <span className="type">Active Services:</span>{" "}
              <span>{clientData?.client?.allowedServices?.length}</span>
            </div>

            <div className="fund">
              <span>Enter amount in the box below to fund wallet</span>
              <input
                name="amount"
                type="amount"
                value={amount?.amounts}
                onChange={(e) => setting(e)}
                placeholder="Enter Amount"
              />
            </div>
          </article>

          <button
            type="submit"
            onClick={(e) => fundWallet(e)}
            className="fund-btn"
          >
            FUND WALLET
          </button>
        </div>
      </div>
    </Modalwrapper>
  );
};
const Modalwrapper = styled.div`
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
  .modal-content {
    /* display: flex; */
    /* flex-direction: column; */
    background-color: white;
    min-height: 45%;
    width: 35%;
    border-radius: 20px;
    padding: 20px 30px;
  }
  .modal-content h1 {
    text-align: center;
    color: #28d1ff;
  }
  .m-icon {
    float: right;
    font-size: 30px;
    font-weight: 100;
    color: gray;
    margin-top: 10px;
    /* display: flex;
    justify-content: flex-end, */
  }
  /* .m-list, ul, li{
   list-style: none; 
   margin: 0;
   padding: 0;
   display: flex;
   flex-direction: column;
   gap: 10px;
 
} */
  .cl-head {
    padding-bottom: 20px;
  }
  .client-img {
    display: flex;
    align-items: center;
  }

  .mail {
    color: blue;
    font-size: 12px;
  }
  .activity {
    margin-top: 20px;
    display: flex;
    gap: 40px;
    /* margin-block-end: 20px; */
  }
  .fund input {
    padding: 10px;
  }

  .activities {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .fund-btn {
    color: white;
    background-color: #28d1ff;
    border-radius: 4px;
    border: 1px solid #f5f5f5;
    outline: none;
    padding: 8px;
    width: 100%;
  }
  .fund {
    padding-block: 20px;
    display: flex;
    flex-direction: column;
  }
  .fund span {
    font-weight: 550;
    font-size: 14px;
  }
  .type {
    font-size: 12px;
  }
`;

export default ClientModal;
