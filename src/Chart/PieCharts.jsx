import React from "react";
import Chart from "react-apexcharts";
import "./chart.css"

export default function Pie({ data }) {
  const series = [30,30,40];
  const options = {
    // chart: {
    //   width: 480,
    //   height: 280,
    //   type: "pie",
    // },

    labels: ["NOTIFICATION", "PAYMENT", "THIRDPARTY"],
    
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="pie" width="80%" height={280} legend={{display:"flex", justifyContent:"center", padding:"30px", gap:"10px"}} />
    </div>
  );
}
