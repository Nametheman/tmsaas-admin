import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import styled from "styled-components";
const ServiceModal = ({ cancelModal }) => {
  const [subService, setSubService] = useState("");
  const [summary, setSummary] = useState("");
  const [name, setName] = useState("");

  let UseDetails = JSON.parse(localStorage.getItem("userDetails"));
  const token = UseDetails?.data?.data?.token;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const AddService = async (e) => {
    e?.preventDefault();
    fetch(`${process.env.REACT_APP_BASE_URL}/v1/services`, {
      method: "POST",
      config,
      body: JSON.stringify({
        subService,
        summary,
        name,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Service not Added");
        }
        console.log(response.json());
        return response.json();
      })
      .then((data) => {
        // Handle the success response
        console.log("Wallet funded successfully:", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
        // Update your state or show an error message to the user
      });
  };
  return (
    <Service>
      <section className="overlay">
        <article className="new-service">
          <div className="service-content">
            <RxCross2
              onClick={() => {
                cancelModal(false);
              }}
              className="m-icon"
            />
            <p>Create New Service</p>
            <article className="service-menu">
              <div className="service">
                <label>Name</label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder=" Service Name"
                />
              </div>

              <div className="service">
                <label>Summary</label>
                <input
                  type="text"
                  placeholder="Summary"
                  onChange={(e) => setSummary(e.target.value)}
                />
              </div>
              <div className="service">
                <label>
                  Subservices(please separate each services with comma)
                </label>
                <input
                  type="text"
                  onChange={(e) => setSubService(e.target.value)}
                  placeholder=" Subservices"
                />
              </div>

              <button
                className="nservice-btn"
                onClick={() => {
                  AddService();
                }}
              >
                CREATE SERVICE
              </button>
            </article>
          </div>
        </article>
      </section>
    </Service>
  );
};

const Service = styled.div`
  .overlay {
    background-color: rgba(0, 0, 0, 0.425);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .new-service {
    /* display: flex; */
    /* flex-direction: column; */
    background-color: white;
    height: 70%;
    width: 35%;
    border-radius: 4px;
    padding: 6px 30px;
  }

  .service {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .service input {
    padding: 10px;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
  }

  .service-menu {
    display: flex;
    flex-direction: column;
    /* justify-content:space-between; */
    gap: 20px;
  }
  .service input::placeholder {
    font-size: 10px;
    color: #afaeae;
  }
  .service-content p {
    text-align: center;
    font-size: 24px;
    color: #28d1ff;
    font-weight: 600;
    /* margin-block:40px; */
  }
  .service label {
    font-weight: bold;
  }

  .nservice-btn {
    align-self: center;
    background: #28d1ff;
    color: #fff;
    padding: 10px 50px;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
    margin-block: 2px;
    /* justify-content: center; */
  }
  .service-content .m-icon {
    float: right;
    font-size: 30px;
    font-weight: 100;
    color: gray;
    /* padding-block-start: 30px; */
    /* display: flex;
    justify-content: flex-end, */
  }
`;
export default ServiceModal;
