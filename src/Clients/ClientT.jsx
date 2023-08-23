import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import "./Ttable.css"
const ClientT = ({ check }) => {
  const [getClient, setGetClient] = useState([]);
  let UseDetails = JSON.parse(localStorage.getItem("userDetails"));
  const config = {
    headers: {
      Authorization: UseDetails?.data?.data?.token,
    },
  };
  const fetchClient = async () => {
    await axios
      .get(`http://188.212.125.218:4457/v1/admin/allClients`, config)
      .then((res) => {
        setGetClient(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <Twrapper>
      <table>
        <thead>
          <tr>
            <th style={{ display: "flex" }}>Client_ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Date Joined</th>
            <th></th>
          </tr>
        </thead>
        {getClient?.map((e) => {
          return (
            <>
              <tr key={e?.userId}>
                <td style={{ borderRight: "1.4px solid #f5f5f5" }}>
                  {e?.userId}
                </td>
                <td style={{ borderRight: "1.4px solid #f5f5f5" }}>{e.name}</td>
                <td style={{ borderRight: "1.4px solid #f5f5f5" }}>
                  {e.email}
                </td>

                <td>
                  {e.access === "granted" ? (
                    <div
                      style={{
                        background:
                          e.access === "granted" ? "#e1eee1" : "#fbe7e8",
                        color: e.access === "granted" ? "#004d00" : "#fbe7e8",
                        display: "flex",
                        borderRadius: "5px",
                        margin: "12px",
                        padding: "4px 4px",
                        justifyContent: "center",
                        borderRight: "2px solid #f5f5f5",
                      }}
                    >
                      Active
                    </div>
                  ) : (
                    <div
                      style={{
                        background:
                          e.access === "granted" ? "#e1eee1" : "#fbe7e8",
                        color: e.access === "granted" ? "#026902" : "#fbe7e8",
                        display: "flex",
                        borderRadius: "5px",
                        margin: "12px",
                        padding: "4px 4px",
                        justifyContent: "center",
                        borderRight: "2px solid #f5f5f5",
                      }}
                    >
                      In-active
                    </div>
                  )}
                </td>
                <td style={{ borderLeft: "1.2px solid #f5f5f5" }}>
                  {new Date(e?.createdAt).toLocaleString("en")}
                </td>
                <Link
                  to="/clientpage"
                  onClick={() => {
                    sessionStorage.setItem("clientID", e?.userId);
                    console.log(e);
                    check(false);
                  }}
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    background: "#28D1FF",
                    borderRadius: "4px",
                    border: "1px solid #28D1FF",
                    color: "#FFF",
                    marginTop: "16px",
                    padding: "2px ",
                    fontSize: "12px",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <td
                    style={{
                      paddingBlock: "4px",
                    }}
                  >
                    View
                  </td>
                </Link>
              </tr>
            </>
          );
        })}
      </table>
    </Twrapper>
  );
};

const Twrapper = styled.div`
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

export default ClientT;
