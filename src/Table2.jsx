import React from "react";
// import { MdAirlineSeatLegroomNormal } from "react-icons/md";
import "./tb.css";

function Table2({ DummyData, columns, color }) {
  return (
    <>
      {color === "agent" && (
        <div>
          <table style={{ width: "100%", boxShadow: "0px 0px 15px #e9ebf3" }}>
            <thead className="column-header">
              <tr
                style={{
                  backgroundColor: "#fafafa",
                  color: "#868fa0",
                }}
              >
                {columns.map((column, index) => {
                  return (
                    <th key={index}>
                      <div>
                        <span className="">{column.header}</span>
                        <span className="header1-icon"> {column.icon}</span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {DummyData?.map((datum, index) => {
                return (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#fff" : "#fafafa",
                    }}
                  >
                    <td>{datum?.Agent_name}</td>
                    <td>{datum?.Agent_ID}</td>
                    <td>{datum?.Phone_Number}</td>
                    <td>{datum?.Business_Name}</td>
                    <td>{datum?.Email_Address}</td>
                    <td>{datum?.State}</td>
                    <td>
                      {datum?.Status === true ? <div>On</div> : <div>Off</div>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* <Footer /> */}
        </div>
      )}
    </>
  );
}

export default Table2;
