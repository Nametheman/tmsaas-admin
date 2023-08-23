import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar";
import "./client.css";
import ClientT from "./ClientT";
import { BsSearch } from "react-icons/bs";
import ClientPage from "./ClientPage";

const Clients = () => {
  const [myclients, setMyClients] = useState(true);
  return (
    <>
      {!myclients && <ClientPage check={setMyClients} />}

      {myclients && (
        <div className="container">
          <Sidebar />
          <section className="homepage">
            <Navbar />
            {/*  */}
            <section className="C-container">
              <div className="client-header">
                <span className="spanA">Clients</span>
                <span className="p">
                  The list below consist of all the clients on the platform
                </span>
              </div>
              <span className="search">
                {" "}
                <BsSearch className="s-icon" />
                <input
                  type="search"
                  onChange={(e) => {
                    return e.target.value;
                  }}
                  placeholder="Search"
                  name=""
                />{" "}
              </span>

              {/* Table */}
              <ClientT check={setMyClients} />
            </section>
          </section>
        </div>
      )}
    </>
  );
};

export default Clients;
