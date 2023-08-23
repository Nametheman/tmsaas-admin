
  
 import React from 'react'
 import "./revenue.css"
 const PaymentData = () => {
    const PaymentsData = [
        {
            id:1,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
           
            Total:"60,000",
            
          },
          {
            id:2,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
           
            Total:"60,000",
            
          },
          {
            id:3,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
           
            Total:"60,000"  
          },
          {
            id:4,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
            Total:"60,000",
            
          },
          {
            id:5,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
            Total:"60,000",
            
          },
          {
            id:6,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
            Total:"60,000",
            
          },
          {
            id:7,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
            Total:"60,000",
               },
        {
          id:8,
          Date: "01-feb-2023",
          Paystack:"20,000",
          Payattitude: "40,000",
          Total:"60,000",
           },
        {
            id:9,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
            Total:"60,000",
               },
          {
            id:10,
            Date: "01-feb-2023",
            Paystack:"20,000",
            Payattitude: "40,000",
            Total:"60,000",
               },
      ]
   return (
     <div>
       <table className='table'>
<thead>
    <tr>
 <th style={{display:"flex"}}>S/N</th>

        <th>Date</th>
        <th>Paystack</th>
        <th>Payattitude</th>
        <th>Total</th>
    </tr>
</thead>
{PaymentsData?.map((p)=>{
    return(
        <>
        <tr key={p?.id}>
        <td>{p.id}</td>
        <td>{p.Date}</td>
        <td>{p.Paystack}</td>
        <td>{p.Payattitude}</td>
        <td>{p.Total}</td>
        </tr>
</>
    );
})}


</table>

     </div>
   )
 }
 
 export default PaymentData
 