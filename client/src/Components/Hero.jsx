import React from "react";
import "../Assets/CSS/Hero.css";

export const Hero = ({img, text}) => {
  return (
    <>
      <div class="hero-box">
        <img
        className="heroSection-img"
          src={img}
          alt=""
        />
        <p>{text}</p>
      </div>
    </>
  );
};
