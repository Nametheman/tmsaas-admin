import React from "react";
// import Input from "../Input";
import ThirdPartyData from "../Third-Party_Data";
import Rvc from "../Rvc";
// import Pie from '../Chart/PieCharts';
import NotificationData from "../NotificationData";
import NotiChart from "../NotiChart";
import Pvc from "../Pvc";
import PaymentData from "../PaymentData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Tinput from "../../Chart/Tinput";
import styled from "styled-components";

const Sthirdparty = ({setTabName}) => {
  return (
    <Button>
    <div >
      <Tabs>
        <TabList>
          <Tab>
            <button
              onClick={() => {
               setTabName('Third Party')
              }}
              className="button"
            >
              3rd Party
            </button>
          </Tab>
          <Tab>
            <button
              onClick={() => {
                setTabName('Payment')
                

              }}
              className="button"
            >
              Payment
            </button>
          </Tab>
          <Tab>
            <button
              onClick={() => {
                setTabName('Notification')
              }}
              className="button"
            >
              Notification
            </button>
          </Tab>
        </TabList>

        <TabPanel>
          <section>
            <div className="rev-input">
              {" "}
              <Tinput className="services-i" />
            </div>
            <div className="services-table">
              {" "}
              <ThirdPartyData />{" "}
            </div>

            <div className="pie">
              <span className="pie-header">
                {" "}
                <p>Revenue Contribution By Service Types</p>{" "}
                <select className="select">
                  <option>Today</option>
                  <option></option>
                </select>{" "}
              </span>
              <Rvc />
            </div>
          </section>
        </TabPanel>

        <TabPanel>
          <section>
            <div className="rev-input">
              {" "}
              <Tinput className="services-i" />
            </div>
            <div className="services-table">
              {" "}
              <PaymentData />
            </div>

            <div className="pie">
              <span className="pie-header">
                {" "}
                <p>Revenue Contribution By Service Types</p>{" "}
                <select className="select">
                  <option>Today</option>
                  <option></option>
                </select>{" "}
              </span>
              <Pvc />
            </div>
          </section>
        </TabPanel>

        <TabPanel>
          <section>
            <div className="services-table">
              {" "}
              <NotificationData />{" "}
            </div>

            <div className="pie">
              <span className="pie-header">
                {" "}
                <p>Revenue Contribution By Service Types</p>{" "}
                <select className="select">
                  <option>Today</option>
                  <option></option>
                </select>{" "}
              </span>
              <NotiChart />
            </div>
          </section>
        </TabPanel>
      </Tabs>
    </div>
     </Button>
  );
};

const Button=styled.div`
  
  .button{
    outline: none;
    border: none;
    background: transparent;
  }
  .button.clicked{
    color: #28D1FF;
    background: white;
    border: 1px solid #28D1FF;
    border-bottom: 2px solid #28D1FF;
  }
`

export default Sthirdparty;
