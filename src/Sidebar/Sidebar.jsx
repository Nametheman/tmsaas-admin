import React from "react";
import "./sidebar.css";
import logo from "../Image/logo.png";
import overview from "../Image/overview.png";
import client from "../Image/client.png";
import services from "../Image/services.png";
import transaction from "../Image/transaction.png";
import settings from "../Image/settings.png";
import pricing from "../Image/pricing.png";
import support from "../Image/support.png";
// import logo from "../Image/logo.png"
import logout from "../Image/logout.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sbData = [
    {
      id: 1,
      title: "Overview",
      image: overview,
      cName: "sidelinks",
      path: "/home",
    },
    {
      id: 2,
      title: "Clients",
      image: client,
      cName: "sidelinks",
      path: "/clients",
    },
    {
      id: 3,
      title: "Services",
      image: services,
      cName: "sidelinks",
      path: "/services",
    },
    {
      id: 4,
      title: "Transactions",
      image: transaction,
      cName: "sidelinks",
      path: "/transactions",
    },
    {
      id: 5,
      title: "Pricing",
      image: pricing,
      cName: "sidelinks",
      path: "/pricing",
    },
    {
      id: 6,
      title: "Settings",
      image: settings,
      cName: "sidelinks",
      path: "/settings",
    },
    {
      id: 7,
      title: "Support",
      image: support,
      cName: "sidelinks",
      path: "/support",
    },
    {
      id: 8,
      title: "Logout",
      image: logout,
      cName: "sidelinks",
      path: "/logout",
    },
  ];

  return (
    <sidebar className="sidebar">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <section className="side-links">
        {sbData.map((sbData) => {
          return (
            <NavLink to={sbData.path}>
              <li
                className={
                  window.location.pathname === sbData.path
                    ? "sidelinks2"
                    : "sidelinks"
                }
                key={sbData.id}
              >
                {
                  <img
                    src={sbData.image}
                    className={
                      window.location.pathname === sbData.path
                        ? "sidelinks-img"
                        : "side-links-img"
                    }
                    alt=""
                  />
                }
                {sbData.title}
              </li>
            </NavLink>
          );
        })}
      </section>
      {/* <a href='/' className=''><img src={} alt=''/></a>   */}
    </sidebar>
  );
};

export default Sidebar;
