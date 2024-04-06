import React from "react";
import review1 from "../Assets/Images/review-1.png";
import review2 from "../Assets/Images/review-2.png";
import review3 from "../Assets/Images/review-3.png";
import quote from "../Assets/Images/quote-img.png";
import "../Assets/CSS/Reviews.css";

export default function Reviews() {
  return (
    <div className="review">
      <h1 className="heading">Customer's Review</h1>

      <div className="box-container">
        <div className="box">
          <img src={quote} alt="" className="quote" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
            quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
          </p>
          <img src={review1} className="user" alt="" />
          <h3>Rahul Mishra</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>

        <div className="box">
          <img src={quote} alt="IMG" className="quote" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
            quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
          </p>
          <img src={review2} className="user" alt="IMG" />
          <h3>jenny white</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>

        <div className="box">
          <img src={quote} alt="IMG" className="quote" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla
            sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi
            quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.
          </p>
          <img src={review3} className="user" alt="IMG" />
          <h3>Shanaya Kapoor</h3>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
