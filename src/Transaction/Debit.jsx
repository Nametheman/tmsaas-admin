import React, { useEffect, useState } from "react";
// import DummyData from "../component/DummyApi";
import "./Ttable.css";
import axios from "axios";
const Debit = () => {
  const [Debit, setDebit] = useState([]);
  // const [credit, getCredit] = useState('')

  let UseDetails = JSON.parse(localStorage.getItem("userDetails"));

  const config = {
    headers: {
      Authorization: UseDetails?.data?.data?.token,
    },
  };

  const getDebit = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/v1/transactions/get/debit?page=1&limit=10`,
        config
      )
      .then((res) => {
        // console.log(res);
        setDebit(res.data?.data);
        // console.log(res.data.billingId)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDebit();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ display: "flex" }}>S/N</th>
          <th>DATE</th>
          <th>TRANSACTION ID</th>
          <th>SERVICE NAME</th>
          <th>BILLER NAME</th>
          <th>AMOUNT</th>
          <th>CLIENT NAME</th>
          <th>STATUS</th>
        </tr>
      </thead>
      {Debit?.map((d) => {
        return (
          <>
            <tr key={d?.userId}>
              <td>{d?.id}</td>
              <td> {new Date(d?.createdAt).toLocaleString("en")}</td>
              <td>{d?.transactionId}</td>
              <td>{d?.serviceName}</td>
              <td>{d?.billingId}</td>
              <td>{d?.amount}</td>
              <td>{d?.by}</td>
              <td
                style={{
                  backgroundColor:
                    d?.status === "SUCCESS" ? "#e1eee1" : "#fbe7e8",
                  color: d?.status === "SUCCESS" ? "GREEN" : "RED",
                  display: "inline-flex",
                  borderRadius: "5px",
                  width: "60%",
                  margin: "10px",
                  padding: "7px 8px",
                  justifyContent: "center",
                }}
              >
                {d?.status}
              </td>
            </tr>
          </>
        );
      })}
    </table>
  );
};

export default Debit;
