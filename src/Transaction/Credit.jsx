import React, { useState, useEffect } from "react";
import axios from "axios";
// import {TiArrowUnsorted} from "react-icons/ti"
// import CreditData from '../component/TableC'
import "./Ttable.css";

const Credit = () => {
  const [creditData, setCreditData] = useState([]);

  let UseDetails = JSON.parse(localStorage.getItem("userDetails"));

  const config = {
    headers: {
      Authorization: UseDetails?.data?.data?.token,
    },
  };

  const getCredit = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/v1/transactions/get/credit?page=1&limit=10`,
        config
      )
      .then((res) => {
        console.log(res);
        setCreditData(res.data?.data);
        console.log(res.data.billingId);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getCredit();
  }, [creditData]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ display: "flex" }}>S/N</th>
          <th>DATE</th>
          {/* <th>
              TRANSACTION ID <TiArrowUnsorted/>
            </th> */}
          <th>AMOUNT</th>
          <th>CLIENT</th>
          <th>STATUS</th>
        </tr>
      </thead>

      {creditData?.map((d) => {
        return (
          <>
            <tr key={d?.id}>
              <td>{d.id}</td>
              <td>{new Date(d?.createdAt).toLocaleString("en")}</td>
              {/* <td>{d.TRANSACTION_ID}</td> */}
              <td>{d.amount}</td>
              <td>{d?.by}</td>
              <td
                style={{
                  backgroundColor:
                    d.status === "SUCCESS" ? "#e1eee1" : "#fbe7e8",
                  color: d.status === "SUCCESS" ? "GREEN" : "RED",
                  display: "inline-flex",
                  borderRadius: "5px",
                  width: "60%",
                  margin: "10px",
                  padding: "5px 2px",
                  justifyContent: "center",
                }}
              >
                {d.status}
              </td>
            </tr>
          </>
        );
      })}
    </table>
  );
};

export default Credit;
