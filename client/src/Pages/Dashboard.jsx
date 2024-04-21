import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Assets/CSS/Dashboard.css";
import Reviews from "../Components/Reviews";
import About from "../Components/About";
import { Footer } from "../Components/Footer";
// import Hero from '../Components/Hero'

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ display: "block" }} className="dashboard-hero">
        <Navbar />
        <div className="hero-info">
          <h2>FoodLy</h2>
          <p style={{ color: "white" }}>
            Welcome to FoodLy, where we unlock the nutritional secrets of
            every meal, empowering you to make informed choices for a healthier,
            happier life. Our cutting-edge platform predicts and analyzes
            unknown food items, revealing their hidden nutritional profiles.{" "}
          </p>
          <div className="hero-btn">
            <button onClick={() => navigate("/addfood")}>Predict Food</button>
            <button className="read">Read More</button>
          </div>
        </div>
      </div>
      {/* <Hero /> */}
      <div className="about-section">
        <About />
      </div>
      <Reviews />
      <Footer />
      {/* Dashboard <br />
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
      </button> */}
    </>
  );
};
