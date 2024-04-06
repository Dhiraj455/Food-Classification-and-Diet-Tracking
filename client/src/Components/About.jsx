import React from "react";
import "../Assets/CSS/About.css";
import aboutIcon1 from "../Assets/Images/about-icon-1.png";
import aboutIcon2 from "../Assets/Images/about-icon-2.png";
import aboutIcon3 from "../Assets/Images/about-icon-3.png";

export default function About() {
  return (
    <>
      <div className="about">
        <h1 className="heading">about us</h1>

        <div className="row">
          <div className="image">
            <img src="../assets/images/about.jpg" alt="" />
          </div>

          <div className="content">
            <h3 className="title">Empowering Health Through Food Knowledge</h3>
            <p>
              At Healthify, we're on a mission to revolutionize the way you
              interact with food. Our platform utilizes cutting-edge technology
              to predict and recognize unknown food items, providing you with
              invaluable insights into their nutritional content.
            </p>
            <p>
              Whether you're aiming to lose weight, maintain a healthy
              lifestyle, or simply make informed dietary choices, Healthify is
              your go-to resource. With user data tracking features that include
              weight, height, and calorie intake measurement, we tailor our
              recommendations to suit your unique needs and goals. Say goodbye
              to guesswork and hello to a healthier, happier you with Healthify.
            </p>

            <div className="icons-container">
              <div className="icons">
                <img src={aboutIcon1} alt="IMG" />
                <h3>Predict Food</h3>
              </div>
              <div className="icons">
                <img src={aboutIcon2} alt="IMG" />
                <h3>Maintain Sessions</h3>
              </div>
              <div className="icons">
                <img src={aboutIcon3} alt="IMG" />
                <h3>Personalized Service</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
