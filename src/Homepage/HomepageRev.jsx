import React from "react";
import "../Chart/chart.css";
import LineCharts from "../Chart/LineChart";
import Tinput from "../Chart/Tinput";
import { Link } from "react-router-dom";

const Chart = ({ dashboardData }) => {
  return (
    <section>
      <article className="revh-head">
        <div className="txt">
          <span>Revenue</span>
        </div>
        <article>
          <Tinput />
        </article>
      </article>
      <li className="revenues">
        <div className="revenue">
          <span>Revenue Today</span>
          <span className="amt">&#8358; {dashboardData?.revenue?.day}</span>
        </div>
        <div className="revenue">
          <span>Revenue This Week</span>
          <span className="amt">&#8358; {dashboardData?.revenue?.week}</span>
        </div>
        <div className="revenue">
          <span>Revenue This Month</span>
          <span className="amt">&#8358; {dashboardData?.revenue?.month}</span>
        </div>
        <div className="rv">
          <span> Total Revenue</span>
          <span className="amt">&#8358; {dashboardData?.revenue?.year}</span>
        </div>
      </li>

      <article>
        <div className="chart-heading">
          <li className="left-heading">
            <p>Revenue Trend</p>
            <span className="left-heading_span">
              <button></button> Revenue
            </span>
          </li>

          <Link Link to="/revenue" className="right-heading">
            {" "}
            View Full Report
          </Link>
        </div>
        {/* <LineChart/> */}
        <LineCharts />
      </article>
    </section>
  );
};

export default Chart;
