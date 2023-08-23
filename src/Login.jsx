import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email_, setEmail_] = useState("");
  const [password, setpassword] = useState("");

  const customConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handlersubmit = async (e) => {
    e.preventDefault();
    console.log("first");
    const userDetails = await axios
      .post(
        `http://188.212.125.218:4457/v1/auths/login`,
        JSON.stringify({
          email: email_,
          password: password,
        }),
        customConfig
      )
      .catch((e) => {
        console.log(e);
      });
    if (userDetails?.data?.message === "Success") {
      console.log(userDetails);
      window.location.assign("/home");
    }
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };
  return (
    <div>
      <div style={{ width: "40%", display: "flex", flexDirection: "column" }}>
        <form onSubmit={handlersubmit}>
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={(e) => setEmail_(e?.target?.value)}
          />

          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={(e) => setpassword(e?.target?.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
