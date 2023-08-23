  import React from 'react'
  import "./revenue.css"
  
  const ThirdPartyData = () => {
    const TPData = [
        {
            id:1,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
           
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000",
            
          },
          {
            id:2,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000",
            
          },
          {
            id:3,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
           
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000"  
          },
          {
            id:4,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000",
            
          },
          {
            id:5,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000",
            
          },
          {
            id:6,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000",
            
          },
          {
            id:7,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000",
               },
        {
          id:8,
          Date: "01-feb-2023",
          Airtime:"20,000",
          Electricity: "40,000",
          Data: "40,000",
          Cable:"40,000",
          Total:"140,000",
           },
        {
            id:9,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000",
               },
          {
            id:10,
            Date: "01-feb-2023",
            Airtime:"20,000",
            Electricity: "40,000",
            Data: "40,000",
            Cable:"40,000",
            Total:"140,000",
               },
      ]
      
    return (
      <div>
                <table className='table'>
<thead>
    <tr>
        <th style={{display:"flex"}}>S/N</th>
        <th>Date</th>
        <th>Airtime</th>
        <th>Electricity</th>
        <th>Data</th>
        <th>Cable</th>
        <th>Total</th>
    </tr>
</thead>
{TPData?.map((t)=>{
    return(
        <>

        <tr key={t?.id}>
        <td>{t.id}</td>
        <td>{t.Date}</td>
        <td>{t.Airtime}</td>
        <td>{t.Electricity}</td>
        <td>{t.Data}</td>
        <td>{t.Cable}</td>
        <td>{t.Total}</td>
        </tr>
</>
    );
})}

</table>
      </div>
    )
  }
  
  export default ThirdPartyData