import React from "react";
import Chart from "react-apexcharts";
import "../Chart/chart.css"

export default function Pie({ data }) {
  const series = [20,10,30,40];
  const options = {
    // chart: {
    //   width: 480,
    //   height: 280,
    //   type: "pie",
    // },

    labels: ["Airtime", "Data", "Cable", "Electricity"],
    
  };

  return (
    <div id="chart">
      <Chart options={options} series={series} type="pie" width="80%" height={280} legend={{display:"flex", justifyContent:"center", padding:"30px", gap:"10px"}} />
    </div>
  );
}
