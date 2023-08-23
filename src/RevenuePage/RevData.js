

  import React from 'react'
  import "./revenue.css"
  import Pie from "../Chart/PieCharts"
  import Input from "../RevenuePage/Input"
import Tinput from '../Chart/Tinput'
  
  
  const RevData = () => {
    const RevsData = [
        {
            id:1,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
            Third_Party: "40,000",
            Total_Revenue:"100,000",
            
          },
          {
            id:2,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
           
            Third_Party: "40,000",
            Total_Revenue:"100,000",
            
          },
          {
            id:3,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
           
            Third_Party: "40,000",
            Total_Revenue:"100,000",
            
          },
          {
            id:4,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
           
            Third_Party: "40,000",
            Total_Revenue:"100,000",
            
          },
          {
            id:5,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
           
            Third_Party: "40,000",
            Total_Revenue:"100,000",
            
          },
          {
            id:6,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
           
            Third_Party: "40,000",
            Total_Revenue:"100,000",
            
          },
          {
            id:7,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
           
            Third_Party: "40,000",
            Total_Revenue:"100,000",
               },
        {
          id:8,
          Date: "01-feb-2023",
          Payment:"20,000",
          Notification: "40,000",
         
          Third_Party: "40,000",
          Total_Revenue:"100,000",
           },
        {
            id:9,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
           
            Third_Party: "40,000",
            Total_Revenue:"100,000",
               },
          {
            id:10,
            Date: "01-feb-2023",
            Payment:"20,000",
            Notification: "40,000",
           
            Third_Party: "40,000",
            Total_Revenue:"100,000",
               },
      ]
      
    return (
      <div>


<div className="rev-input">
  {/* <Input className='services-i' />  */}
  <Tinput/>
</div>

             <table className="table">
<thead>
    <tr>
    <th style={{display:"flex"}}>S/N</th>
        <th>Date</th>
        <th>Payment (#)</th>
        <th>Notification (#)</th>
        <th>Third Party (#)</th>
        <th>Total Revenue (#)</th>
    </tr>
</thead>

{RevsData?.map((r)=>{
    return(
        <>

        <tr key={r?.id}>
        <td>{r.id}</td>
        <td>{r.Date}</td>
        <td>{r.Payment}</td>
        <td>{r.Notification}</td>
        <td>{r.Third_Party}</td>
        <td>{r.Total_Revenue}</td>
        </tr>
</>
    );
})}
</table>

{/* <div className="services-table"> </div> */}


<div className="pie">
    <span className="pie-header"> <p>Revenue Contribution By Service Types</p> <select className='select'>
<option >Today</option>
<option></option>
</select> </span>
<Pie/>
</div>
      </div>
    )
  }
  
  export default RevData
  