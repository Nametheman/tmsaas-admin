



  import React from 'react'
  import "./revenue.css"
  const NotificationData = () => {
    const NotificationsData = [
        {
            id:1,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000",
            
          },
          {
            id:2,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000",
            
          },
          {
            id:3,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000"  
          },
          {
            id:4,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000",
            
          },
          {
            id:5,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000",
            
          },
          {
            id:6,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000",
            
          },
          {
            id:7,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000",
               },
        {
          id:8,
          Date: "01-feb-2023",
          Email:"20,000",
          Chat:"40,000",
          SMS: "40,000",
          Total:"100,000",
           },
        {
            id:9,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000",
               },
          {
            id:10,
            Date: "01-feb-2023",
            Email:"20,000",
            Chat:"40,000",
            SMS: "40,000",
            Total:"100,000",
               },
      ]
      
    return (
      <div>
        <table className='table'>
<thead>
    <tr>
    <th style={{display:"flex"}}>S/N</th>
        <th>Date</th>
        <th>Email </th>
        <th>Chat</th>
        <th>SMS</th>
        <th>Total</th>
    </tr>
</thead>

{NotificationsData?.map((n)=>{
    return(
        <>

        <tr key={n?.id}>
        <td>{n.id}</td>
        <td>{n.Date}</td>
        <td>{n.Email}</td>
        <td>{n.Chat}</td>
        <td>{n.SMS}</td>
        <td>{n.Total}</td>
        </tr>
</>
    );
})}

</table>
      </div>
    )
  }
  
  export default NotificationData
  