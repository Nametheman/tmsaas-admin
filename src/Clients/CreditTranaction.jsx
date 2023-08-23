import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const CreditTransaction = () => {
  let userID = sessionStorage.getItem("userId");

  const [getTransaction, setGetTransaction] = useState([]);

  let UseDetails = JSON.parse(localStorage.getItem("userDetails"));

  const config = {
    headers: {
      Authorization: UseDetails?.data?.data?.token,
    },
  };
  // const data = [
  //   {
  //     id: 1,
  //     Name: "Adeyemo",
  //     Email: "Adeyemo@tm30.net",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 2,
  //     Name: "CIT MFB",
  //     Email: "Citibills@citmfb.com",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 3,
  //     Name: "PayMyBills",
  //     Email: "admin@tm30.net",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 4,
  //     Name: "PayMyBills-GH",
  //     Email: "michealakinwonmi@gmail.net",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 5,
  //     Name: "Rent4less",
  //     Email: "info@rent4less.com",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 6,
  //     Name: "Funke Obafemi",
  //     Email: "funke@tm30.net",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 7,
  //     Name: "AdminDashboard",
  //     Email: "funke@tm30.net",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 8,
  //     Name: "SuperAdmin",
  //     Email: "Afolabi@tm30.net",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 8,
  //     Name: "TM30Admin",
  //     Email: "tm30@tm30.net",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  //   {
  //     id: 10,
  //     Name: "Reincoso",
  //     Email: "info@reincoso.com",
  //     Status: "Active",
  //     Date_Joined: "22/07/1998",
  //     action: "View",
  //   },
  // ];
  // const [viewClients, setViewClients] = useState()

  const clientTransactions = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/v1/transactions/get/credit/${userID}`,
        config
      )
      .then((res) => {
        setGetTransaction(res.data?.data);
        console.log(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  // console.log(getTransaction);

  // const clientTransaction = async () => {
  //   await axios
  //     .get(`http://89.38.135.41:4457/v1/admin/getClient/${getID}`, config)
  //     .then((res) => {

  //       setViewClients(res?.data.data);
  //       console.log(res)
  //     })
  //     .catch((err) => {

  //     });
  // };

  // useEffect(() => {
  //   clientTransaction();

  // },[])

  useEffect(() => {
    clientTransactions();
  }, []);

  return (
    <TableWrapper>
      <table className="table">
        <thead>
          <tr>
            <th style={{ display: "flex" }}>S/N</th>
            <th>TRANSACTION ID</th>
            <th>SERVICE NAME</th>
            <th>BILLER NAME</th>
            <th>NET VALUE</th>
            <th>AMOUNT</th>
            <th>COMMISSION</th>
            <th>DATE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        {getTransaction?.map((d) => {
          return (
            <>
              <tr key={d?.id}>
                <td>{d.id}</td>
                <td>{d.transactionId}</td>
                <td>{d.serviceName}</td>
                <td>{d.meta?.biller}</td>
                <td>{d.netValue}</td>
                <td>{d?.amount}</td>
                <td>{d?.commission}</td>
                <td>{new Date(d?.createdAt).toLocaleString("en")}</td>
                <td
                  style={{
                    backgroundColor:
                      d.status === "SUCCESS" ? "#e1eee1" : "#fbe7e8",
                    color: d.status === "SUCCESS" ? "GREEN" : "RED",
                    display: "inline-flex",
                    borderRadius: "5px",
                    width: "60%",
                    margin: "10px",
                    padding: "7px 8px",
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
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
  }
  table th {
    font-weight: 500;
    text-align: left;
    font-size: 10px;
    padding: 12px;
    /* margin-block-end: 10px; */
    color: #fff;
    background-color: #28d1ff;
  }
  table tr:nth-child(odd) {
    background-color: #f6f6f6;
  }
  table td {
    padding: 10px;
    font-weight: 500;
    font-size: 11px;
  }
  table td a {
    text-decoration: none;
  }
`;

export default CreditTransaction;
