import React, { useEffect, useState } from "react";
import "./homepage.css";
import notifications from "../Image/notifications.png";
import admin from "../Image/Admin.png";
import Trev from "../Image/Trev.png";
import Tclients from "../Image/Tclients.png";
import Tcount from "../Image/Tcount.png";
import Tservices from "../Image/Tservices.png";
import revenue from "../Image/revenue.png";
import graph from "../Image/graph.png";
// import Chart from "../Chart/Chart";
import Modal from "../Modal/Modal";
import ModalC from "../Modal/ModalC";
import ModalB from "../Modal/ModalB";
import { NavLink } from "react-router-dom";
import HomepageRev from "../Homepage/HomepageRev";
import axios from "axios";
// import Widgets from '../Widgets/Widgets'
const Homepage = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [data, setdata] = useState([]);
  const [dashboardData, setDashboardData] = useState();

  // const [count, setCount] = useState("");
  const [range, setRange] = useState("today");

  let UseDetails = JSON.parse(localStorage.getItem("userDetails"));
  const token = UseDetails?.data?.data?.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // http://89.38.135.41:4457/v1/transactions/metrics?

  const fetchClient = async () => {
    await axios
      .get(
        `http://188.212.125.218:4457/v1/admin/dashboard/overview?range=${range}`,
        config
      )
      .then((res) => {
        console.log(res);
        setdata(res.data?.response);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const getDashboard = async () => {
    await axios
      .get(`http://188.212.125.218:4457/v1/admin/dashboard`, config)
      .then((res) => {
        setDashboardData(res.data?.data?.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchClient();
    getDashboard();
  }, []);

  // const [active, setActive] = useState("today");
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="img-container">
          <img src={notifications} alt="" />
          <img src={admin} className="img-admin" alt="" />
        </div>
        <div className="Admin">
          <span className="span1">Administration</span>
          <span className="span2">Super Admin</span>
        </div>
      </nav>

      {/* <Widgets/> */}

      <main className="B-container">
        {/* top */}
        <article className="top-section">
          <div className="left-text">
            <h1>Dashboard</h1>
          </div>
          <div className="right-text">
            <p
              onClick={() => {
                setRange("today");
              }}
              style={{ cursor: "pointer" }}
            >
              Today
            </p>
            <p
              onClick={() => {
                setRange("week");
              }}
              style={{ cursor: "pointer" }}
            >
              This Week
            </p>
            <p
              onClick={() => {
                setRange("month");
              }}
              style={{ cursor: "pointer" }}
            >
              This Month
            </p>
            <p
              onClick={() => {
                setRange("year");
              }}
              style={{ cursor: "pointer" }}
            >
              This Year
            </p>
          </div>
        </article>
        {/* widget */}
        {show && <Modal cancelModal={setShow} />}
        {show1 && <ModalC cancelModal={setShow1} />}
        {show2 && <ModalB cancelModal={setShow2} />}
        {/* {show3 &&<Modal cancelModal={setShow3} />} */}
        <section className="wsection">
          {/* {active === &&  todaycard} */}

          <section
            className="widgets"
            onClick={() => {
              setShow(true);
            }}
          >
            <div className="top-content">
              <div>
                <img className="first-img" src={Tclients} alt="" />
              </div>
              <div className="wTexts">
                <strong>{dashboardData?.clientCount}</strong>
                <span className="t-desc">Total Clients</span>
              </div>
            </div>
            <div className="w-img">
              <img className="w-image" src={graph} alt="" />
            </div>
          </section>
          <section
            className="widgets"
            onClick={() => {
              setShow1(true);
            }}
          >
            <div className="top-content">
              <div>
                <img className="first-img" src={Tservices} alt="" />
              </div>
              <div className="wTexts">
                <strong>{dashboardData?.serviceCount}</strong>
                <span className="t-desc">Total Services</span>
              </div>
            </div>
            <div className="w-img">
              <img className="w-image" src={revenue} alt="" />
            </div>
          </section>

          <section
            className="widgets"
            onClick={() => {
              setShow2(true);
            }}
          >
            <div className="top-content">
              <div>
                <img className="first-img" src={Tcount} alt="" />
              </div>
              <div className="wTexts">
                <strong> {dashboardData?.transactionCount}</strong>
                <span className="t-desc">Transaction Counts</span>
              </div>
            </div>
            <div className="w-img">
              <img className="w-image" src={graph} alt="" />
            </div>
          </section>
          <section className="widgets" key={widget.id}>
            <div className="top-content">
              <div>
                <NavLink to="revenue">
                  <img className="first-img" src={Trev} alt="" />
                </NavLink>
              </div>
              <div className="wTexts">
                <span>
                  &#8358; <strong> {dashboardData?.revenue?.year}</strong>
                </span>
                <span className="t-desc">Total Revenue</span>
              </div>
            </div>
            <div className="w-img">
              <img className="w-image" src={revenue} alt="" />
            </div>
          </section>
        </section>

        {/*  */}
        {/* <Chart /> */}
        <HomepageRev dashboardData={dashboardData} />
      </main>
    </div>
  );
};

const widget = [
  {
    id: 1,
    img: Tclients,
    text1: "50",
    text2: "Total Clients",
    img2: graph,
  },
  {
    id: 2,
    img: Tservices,
    text1: "50",
    text2: "Total services",
    img2: revenue,
  },
  {
    id: 3,
    img: Tcount,
    text1: "300",
    text2: "Transaction Counts",
    img2: graph,
  },
  {
    id: 4,
    img: Trev,
    text1: "#20,000,000",
    text2: "Total Revenue",
    img2: revenue,
  },
];

export default Homepage;
