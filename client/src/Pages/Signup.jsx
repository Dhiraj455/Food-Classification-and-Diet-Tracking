import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    if (
      userData.username &&
      userData.password &&
      userData.cpassword &&
      userData.email
    ) {
      if (userData.password === userData.cpassword) {
        const response = await fetch(
          "http://localhost:5000/api/v1/user/register",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        const data = await response.json();
        console.log(data);
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill all the fields");
    }
  };
  const handleChange = async (e) => {
    e.preventDefault();
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="cpassword"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
      </form>
      <button type="submit" onClick={handleSubmit}>Signup</button>
      <button onClick={() => navigate("/")}>Go to login</button>
    </div>
  );
}
