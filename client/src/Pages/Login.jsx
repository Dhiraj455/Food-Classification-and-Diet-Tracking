import React, { useState } from "react";
// import { useCookies } from "react-cookie";
import { userLogin } from "../Services/user";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  // const [cookies, setCookie] = useCookies(["user"]);
  const handleChange = async (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    if (loginData.email && loginData.password) {
      const response = await userLogin(loginData);
      if(response.success) {
        alert("User Login Success")
        navigate("/dashboard");
      } else {
        alert("User Login Failed")
      }
      // await fetch("http://localhost:5000/api/v1/user/login", {
      //   method: "POST",
      //   credentials: 'include',
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(loginData),
      // });
      // const data = await response.json();
      // setCookie("jwttoken", data.data.token, { path: '/' });
      console.log(response);
    } else {
      alert("Please fill all the fields");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </form>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
      <button onClick={() => navigate("/signup")}>Go to Signup</button>
    </div>
  );
}
