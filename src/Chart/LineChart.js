
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
//   Tooltip,  
} from "recharts";

const data = [
  
  {
    name: "JAN",
    uv: 9,
   
    Total: 2400
  },
  {
    name: "FEB",
    uv: 7.9,
  
    Total: 2210
  },
  {
    name: "MAR",
    uv: 8.75,
    
    Total: 12,
  },
  {
    name: "APR",
    uv: 8.2,
    
    Total: 2000
  },
  {
    name: "MAY",
    uv: 7.7,
   
    Total: 2181
  },
  {
    name: "JUN",
    uv: 7.4,
   
    Total: 2500
  },
  {
    name: "JUL",
    uv: 7.2,
 
    Total: 2100
  },
  {
    name: "AUG",
    uv: 6.6,
   
    Total: 2500
  },
  {
    name: "SEP",
    uv: 6.9,
   
    Total: 2500
  },
  {
    name: "OCT",
    uv: 6,
   
    Total: 2500
  },
  {
    name: "NOV",
    uv: 5,
   
    Total: 2500
  },
  {
    name: "DEC",
    uv: 5.8,
    Total: 2500
  },
];

export default function App() {
  return (

    <ResponsiveContainer width="100%" aspect={2.7}>
    <LineChart    
  data={data}
  padding={{ top: 5, right: 20, bottom: 5, left: 100 }}
    >
   
     
      <XAxis axisLine={true} tickLine={true} dataKey="name" fontSize={9} fontWeight={500}/>
          <YAxis axisLine={false}   fontSize={9} fontWeight={500}  unit='M'/>
      {/* <Tooltip /> */}
     <CartesianGrid  vertical={false} stroke="#ccc" strokeDasharray="0.2"/>
      <Line type="monotone" dataKey="uv" />
    </LineChart>
    </ResponsiveContainer>

  );
}
