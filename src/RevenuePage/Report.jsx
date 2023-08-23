import React from "react";
import Chart from "react-apexcharts";

const Pie =({all})=> {
  console.log(all)
  const name = all?.map((names) => names?.entity)
  console.log(name)


  const surn = all?.map((names) => names?.count)
  console.log(surn)

  const getRandomNumbers = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };
  
  const getRandomColors = () => {
    const h = getRandomNumbers(360);
    const s = getRandomNumbers(100);
    const l = getRandomNumbers(100);
  
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };
  
  let backgroundColors = [];
  
  
  for(let i= 0; i < all?.length ; i++) {
       backgroundColors.push(getRandomColors())
    
  }
  
  console.log(backgroundColors) 

   const series = [...surn]
   const options = {
              chart: {
                width: 280,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              labels: [...name],
            //   legend: {
            //     formatter: function(val, opts) {
            //       return val + " - " + opts.w.globals.series[opts.seriesIndex]
            //     }
            //   },

                legend: {
                    // formatter: function(val, opts) {
                    //           return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    //         },
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    position: 'right',
                    horizontalAlign: 'center',
                    floating: false,
                    fontSize: '11px',
                    fontFamily: `Plus Jakarta Sans', sans-serif`,
                    fontWeight: 400,
                    formatter: undefined,
                    inverseOrder: false,
                    width: undefined,
                    height: undefined,
                    tooltipHoverFormatter: undefined,
                    customLegendItems: [],
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                    colors: undefined, useSeriesColors: false
                    }
                    ,
                    markers: {
                    width: 12, height: 12, strokeWidth: 0, strokeColor: '#fff', fillColors: undefined, radius: 12, customHTML: undefined, onClick: undefined, offsetX: 0, offsetY: 0
                    }
                    ,
                    itemMargin: {
                    horizontal: 100, vertical: 20
                    }
                    ,
                    onItemClick: {
                    toggleDataSeries: true
                    }
                    ,
                    onItemHover: {
                    highlightDataSeries: true
                    }
                    
                },
              title: {
                text: 'Total Transaction Per Channel'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200

                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            }

  return (
    <div>
     
      <Chart options={options} type="donut" series={series} height="290"  />
    </div>
  )
};

export default Pie