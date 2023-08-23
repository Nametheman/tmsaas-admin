import React from 'react'
import Chart from "react-apexcharts";
import styled from 'styled-components';

const PieC = () => {
  return (
          <PieWrapper> 
      <div className="chart-container">
      
      <Chart
      type='pie'
      width={549}
      height={550}
      series={[30,30,40]}
      options={{
          plugins:{
             legend :{
  verticalAlign: "center",
 }
            },
            labels:["Notification", "Payment", "Third Party"]
        }}
        />


    </div>

</PieWrapper>
  )
}
const PieWrapper=styled.di`
.apexcharts-legend.apx-legend-position-left{
}
.apexcharts-legend{
    justify-content: center !important;

}
.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
}

.apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
    flex-direction: column;
    bottom: 0;
}

.apexcharts-legend {
    display: flex;
    overflow: auto;
    padding: 0 10px;
}
`

export default PieC
