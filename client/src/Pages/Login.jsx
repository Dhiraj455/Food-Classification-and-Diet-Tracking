import React, { useState } from "react";
import { useCookies } from 'react-cookie';

export default function Login() {
  const [loginData, setLoginData] = useState({});
  const [cookies, setCookie] = useCookies(['user']);
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
      const response = await fetch("http://localhost:5000/api/v1/user/login", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      // setCookie("jwttoken", data.data.token, { path: '/' });
      console.log(data);
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
      <button type="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
}
