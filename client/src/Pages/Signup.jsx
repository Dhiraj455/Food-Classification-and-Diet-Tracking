import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../Services/user";
import "../Assets/CSS/LoginSignup.css";
import hero from "../Assets/Images/Logo.svg";

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
        // const response = await fetch(
        //   "http://localhost:5000/api/v1/user/register",
        //   {
        //     method: "POST",
        //     credentials: "include",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(userData),
        //   }
        // );
        // const data = await response.json();
        const data = await userRegister(userData);
        if (data.success) {
          alert("User Registered Success");
          navigate("/");
        } else {
          alert("User Registration Failed");
        }
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
    <div className="hero">
      <div className="branding">
        <img src={hero} alt="logo" className="logo" />
        {/* <h2 className="logo">Healthify</h2> */}
        {/* <p className="slogan">It's gonna be legendary</p> */}
      </div>
      <div className="box">
        <p>Sign Up</p>
        <form action="/" method="post">
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input
                type="name"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="button-field">
            <input
              type="submit"
              id="login"
              value="Sign Up"
              className="button"
              onClick={handleSubmit}
            />
          </div>
        </form>
        <div className="link">
          Already have an account? <span onClick={() => navigate("/")} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}>Login</span>
        </div>
      </div>
    </div>
  );
}
