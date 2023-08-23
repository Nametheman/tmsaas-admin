import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";

const EditService = ({ cancelModal }) => {
  const [editService, setEditService] = useState();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [documentation, setDocumentation] = useState("");
  const [subservices, setSubservices] = useState("");

  // const [serve, setServe] = useState({
  //      name: '',
  //      description:"",
  //      documentation:"",
  //      subservices:""
  // })

  // const Details = (e) => {
  //     const [name, value] = e.target
  //     setServe({
  //         ...serve,[name]
  //     })
  // }

  // http://89.38.135.41:4457/v1/transactions/get/debit/

  let useDetails = JSON.parse(localStorage.getItem("userDetails"));
  const token = useDetails?.data?.data?.token;

  console.log(useDetails, token);

  let userId = useDetails?.data?.data?.client?.userId;

  const AddService = async (e) => {
    e?.preventDefault();
    fetch(`http://89.38.135.41:4457/v1/services/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        // Subservices: subservices,
        // name: name,
        description: description,
        // documentation: documentation,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Edited Service Failed");
        }
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        // Handle the success response
        console.log("Service successfully Edited", data);

        setEditService(data);
        // Update your state or show a success message to the user
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
        // Update your state or show an error message to the user
      });
  };

  // const config = {
  //   headers: {
  //     Authorization: UseDetails?.data?.data?.token,
  //   },
  // };
  let UseDetails = JSON.parse(localStorage.getItem("userDetails"));
  const config = {
    headers: {
      Authorization: UseDetails?.data?.data?.token,
    },
  };
  const client = async () => {
    await axios
      .get(
        `http://89.38.135.41:4457/v1/transactions/get/credit/${userId}`,
        config
      )
      .then((res) => {
        // setGetClient(res.data?.data);
        console.log(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    client();
  });

  return (
    <form onSubmit={AddService}>
      <ServiceM>
        <div className="overlay">
          <div className="swhite">
            <AiOutlineCloseCircle
              onClick={() => {
                cancelModal(false);
              }}
              className="m-icon"
            />
            <h2>Edit Service</h2>
            <section className="e-content">
              <div className="e-input">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g: Third Party Services"
                />
              </div>
              <div className="e-input">
                <span>Description</span>
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder=" e.g: Third Party Services"
                />
              </div>

              <div className="e-input">
                <span>
                  Subservices (please separate each services with comma)
                </span>
                <input
                  type="text"
                  name="subservices"
                  value={subservices}
                  onChange={(e) => setSubservices(e.target.value)}
                  placeholder="e.g: Airtime, data, Cable Tv, Electricity"
                />
              </div>

              <div className="e-input">
                <span>Documentation</span>
                <input
                  type="text"
                  name="documentation"
                  value={documentation}
                  onChange={(e) => setDocumentation(e.target.value)}
                  placeholder="Documentation"
                />
              </div>

              <button
                type="submit"
                onClick={() => AddService}
                className="e-btn"
              >
                SAVE
              </button>
            </section>
          </div>
        </div>
      </ServiceM>
    </form>
  );
};
const ServiceM = styled.div`
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
  /.e-contetn {
    /* display:flex; */
    /* flex-direction:column; */
  }

  .swhite {
    background-color: white;
    height: 75%;
    width: 35%;
    border-radius: 4px;
    padding: 15px;
  }
  .e-input {
    display: flex;
    flex-direction: column;
    /* justify-content:space-between; */
    gap: 5px;
    margin-bottom: 14px;
  }
  .e-input input {
    padding: 8px;
  }

  .swhite h2 {
    text-align: center;
    color: #28d1ff;
  }

  .m-icon {
    float: right;
    font-size: 30px;
    font-weight: 100;
    color: gray;
  }

  .e-btn {
    margin: auto;
    text-decoration: none;
    background: #28d1ff;
    border: 1px solid #28d1ff;
    border-radius: 6px;
    /* display:flex; */
    width: 100%;
    text-align: center;
    padding: 10px;
    color: white;
    align-self: center;
    margin-block: 10px;
    /* margin */
  }
`;

export default EditService;
