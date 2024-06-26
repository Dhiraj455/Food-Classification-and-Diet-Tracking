import React, { useState } from "react";
// import { useCookies } from "react-cookie";
import { userLogin } from "../Services/user";
import { useNavigate } from "react-router-dom";
import "../Assets/CSS/LoginSignup.css";
import hero from "../Assets/Images/Logo.svg";

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
    <div className="hero">
    <div className="branding">
      <img src={hero} alt="logo" className="logo" />
      {/* <h2 className="logo">Healthify</h2> */}
      {/* <p className="slogan">It's gonna be legendary</p> */}
    </div>
    <div className="box">
      <p>Login</p>
      <form action="/" method="post">
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
        <div className="button-field">
          <input
            type="submit"
            id="login"
            value="Login"
            className="button"
            onClick={handleSubmit}
          />
        </div>
      </form>
      <div className="link">
        Don't have an account? <span onClick={() => navigate("/signup")} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}> Sign Up</span>
      </div>
    </div>
  </div>
  );
}
