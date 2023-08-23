// import React from 'react'
// import styled from 'styled-components'
// import { AiOutlineCloseCircle } from "react-icons/ai";



// const Logout = ({cancelModal}) => {
//     // const [logout, setLogout] =useState(false)
//   return (
//     <Signout>
//     <section className="overlay">
//       <article className="swhite">
//       <AiOutlineCloseCircle
//             onClick={() => {
//               cancelModal(false);
//             }}
//             className="m-icon"
//             />
//       <div>  
        
//         </div>  
//         <p>Logout</p>

//         <span><button className="">Cancel</button> <button className="">Confirm</button></span>
        
//           </article>
//     </section>
//       </Signout>
//   )
// }
// const Signout = styled.div`
//  .overlay {
//     background-color: rgba(0, 0, 0, 0.425);
//     position: fixed;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//   }  
  
//   .swhite {
//     background-color: white;
//     height: 45%;
//     width: 35%;
//     border-radius: 4px;
//     padding: 15px;
//   }

  
//   .m-icon {
//     float: right;
//     font-size: 30px;
//     font-weight: 100;
//     color: gray;
//   }

// `

// export default Logout



// import React, { useState } from 'react';

// function WalletFundingForm() {
//   const [amount, setAmount] = useState('');
//   const [walletId, setWalletId] = useState('');

//   const handleAmountChange = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleWalletIdChange = (event) => {
//     setWalletId(event.target.value);
//   };

//   const handleWalletFunding = (event) => {
//     event.preventDefault();

//     // Validate the form inputs
//     if (!amount || !walletId) {
//       alert('Please fill in all the required fields');
//       return;
//     }

//     // Perform the wallet funding API request
//     fetch('https://api.example.com/wallet/fund', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         amount: amount,
//         walletId: walletId
//       })
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Wallet funding failed');
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Handle the success response
//         console.log('Wallet funded successfully:', data);
//         // Update your state or show a success message to the user
//       })
//       .catch(error => {
//         // Handle any errors that occurred during the request
//         console.error('Error:', error);
//         // Update your state or show an error message to the user
//       });
//   };

//   return (
//     <form onSubmit={handleWalletFunding}>
//       <label>
//         Amount:
//         <input type="number" value={amount} onChange={handleAmountChange} />
//       </label>
//       <label>
//         Wallet ID:
//         <input type="text" value={walletId} onChange={handleWalletIdChange} />
//       </label>
//       <button type="submit">Fund Wallet</button>
//     </form>
//   );
// }

// export default WalletFundingForm;
// In this example, we create a function component called WalletFundingForm that renders a form with two input fields for the amount and wallet ID. The form's submission is handled by the handleWalletFunding function.

// We use React's useState hook to manage the state of the amount and wallet ID inputs. The handleAmountChange and handleWalletIdChange functions update the corresponding state variables when the input values change.

// In the handleWalletFunding function, we prevent the default form submission behavior using event.preventDefault(). Then, we validate the form inputs and display an alert message if either field is empty.

// Next, we perform a fetch request to the wallet funding API endpoint, similar to the previous example. The request includes the amount and wallet ID in the request body.

// In the then block, we check the response status and parse the response as JSON if it's successful. The success response can be handled by updating the state or displaying a success message to the user.

// In case of any errors during the request, the catch block is executed. You can handle and display the error message by updating the state or showing an error message to the user.

// The component returns the form JSX, with the event handler functions assigned to the respective input fields and the form's onSubmit event.

// Make sure to replace 'https://api.example.com/wallet/fund' with the actual API endpoint for funding a wallet.

// Note: This example assumes you have the necessary dependencies installed and the code is part of a larger React application.







// import React, { useState } from 'react';

// function ServiceForm({ service, onSubmit }) {
//   const [title, setTitle] = useState(service ? service.title : '');
//   const [description, setDescription] = useState(service ? service.description : '');

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Validate the form inputs
//     if (!title || !description) {
//       alert('Please fill in all the required fields');
//       return;
//     }

//     // Create or edit the service
//     const serviceData = {
//       title: title,
//       description: description
//     };

//     onSubmit(serviceData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={handleTitleChange} />
//       </label>
//       <label>
//         Description:
//         <textarea value={description} onChange={handleDescriptionChange} />
//       </label>
//       <button type="submit">{service ? 'Update' : 'Create'}</button>
//     </form>
//   );
// }

// export default ServiceForm;
// In this example, we create a function component called ServiceForm that renders a form for creating or editing a service. The form includes input fields for the title and a textarea for the description.

// The service prop is used to initialize the form fields with existing service data when in edit mode. If service is provided, the component assumes it's in edit mode and sets the initial state values accordingly.

// We use React's useState hook to manage the state of the title and description inputs. The handleTitleChange and handleDescriptionChange functions update the corresponding state variables when the input values change.

// The handleSubmit function is called when the form is submitted. It prevents the default form submission behavior, validates the form inputs, and displays an alert message if any required field is empty.

// Based on the validation result, the serviceData object is created with the title and description values. This object is then passed to the onSubmit function prop provided by the parent component.

// The form JSX returns the input fields and textarea, with the event handler functions assigned to their respective onChange events. The form's onSubmit event is handled by the handleSubmit function.

// The submit button label is dynamically set based on whether the component is in create or edit mode.

// Make sure to replace the form fields and logic with the appropriate fields and data for your service creation/editing functionality.

// Note: This example assumes you have the necessary dependencies installed and the code is part of a larger React application.