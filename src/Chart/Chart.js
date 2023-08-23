import React from 'react'
import "./chart.css"
import LineCharts from './LineChart'
import Tinput from './Tinput'

const Chart = () => {
  return (
    <section>
        <article className='rev-head'>
<div className='txt'><span>Revenue</span></div>
</article>

<article className="r-head" > <div className='txt'><span>Today</span> <span>This week</span> <span>This Month</span> <span>This Year</span>  </div> <Tinput/></article>




{/* <div className='lft'>
<a href="https://" className='date'>
<span className='cal'>
    <p> Start Date </p> <img src={calendar} alt="calender"/>
</span> - <span className="cal">
    <p> End Date </p><img src={calendar} alt="calender"/>
</span>
</a>
 
<span className='csv'>
     <img src={csv} alt="calendar"/> <p>
     Download CSV
        </p>
</span>

</div> */}








<li className='revenues'>
    <div className='revenue'> 
        <span>
        Revenue Today
        </span>
        <span className='amt'>&#8358; 2,000,000</span>
        </div>
    <div className='revenue'>
        <span>Revenue This Week</span><span className='amt'>&#8358; 2,000,000</span>
        </div>
    <div className='revenue'>
        <span>Revenue This Month</span><span className='amt'>&#8358; 8,000,000</span>
    </div>
    <div className='rv'>
        <span> Total Revenue</span>
        <span className='amt'>&#8358;  20,000,000</span>
    </div>
</li>

<article>
    <div className='chart-heading'>
<li className='left-heading'>
    <p>Revenue Trend</p>
        <span className='left-heading_span'><button></button> Revenue</span>
</li>

        {/* <Link Link to="/revenue" className='right-heading'> View Full Report</Link> */}
    </div>
    {/* <LineChart/> */}
    <LineCharts/>
</article>
    </section>
  )
}

export default Chart