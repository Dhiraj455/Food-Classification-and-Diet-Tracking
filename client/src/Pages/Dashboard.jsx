import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Assets/CSS/Dashboard.css";
// import Hero from '../Components/Hero'

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "block" }} className="dashboard-hero">
        <Navbar />
        <div className="hero-info">
          <h2>Healthify</h2>
          <p>
            A place to predict your daily food and handle your diet with proper
            care A place to predict your daily food and handle your diet with
            proper care{" "}
          </p>
          <div className="hero-btn">
            <button onClick={() => navigate("/addfood")}>Predict Food</button>
            <button className="read">Read More</button>
          </div>
        </div>
      </div>
      {/* <Hero /> */}
      Dashboard <br />
      <button onClick={() => navigate("/addfood")} style={{ padding: "10px" }}>
        Add Food
      </button>{" "}
      <br />
      <button onClick={() => navigate("/profile")} style={{ padding: "10px" }}>
        Profile
      </button>{" "}
      <br />
      <button onClick={() => navigate("/sessions")} style={{ padding: "10px" }}>
        Sessions
      </button>
    </>
  );
};
