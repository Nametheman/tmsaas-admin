import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar'
import styled from 'styled-components'

const Support = () => {
  return (
    <SupportWrapper>
    <section className="container">
        <Sidebar/>
        <article className="homepage">
            <Navbar/>
            <div className="S-container">
                <p className="s-head">
                <span className="s-title">Support</span>
<span className="s-desc">Got questions that require support and Assistance</span>

                </p>



            </div>
        </article>
    </section>
    </SupportWrapper>
  )
}
const SupportWrapper=styled.div`
    

    .S-container{
        box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
    background: #fff;
    padding: 10px;
    border-radius: 6px;
    margin: 20px;
    height: 100vh;
    }
    .s-head{
    display: flex;
    flex-direction:column;
    gap: 8px;
    margin-block:20px ;
    padding: 10px;
    border-bottom:1px solid #dedede;

   }
   .s-title{
    font-size: 24px;
    font-weight:600;
   }
   .s-desc{
font-size: 13px;
   }
`

export default Support