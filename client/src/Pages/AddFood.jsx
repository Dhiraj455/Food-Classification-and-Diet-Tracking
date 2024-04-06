import React, { useState } from "react";
import { addFood } from "../Services/food";
import Navbar from "../Components/Navbar";
import { Hero } from "../Components/Hero";

export default function AddFood() {
  const [image, setImage] = useState();
  const [prediction, setPrediction] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    console.log("Submitting");
    e.preventDefault();
    console.log(image);
    const formData = new FormData();
    formData.append("file", image);
    fetch("http://localhost:8000/predict_api", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrediction(data);
        callExpressAPI(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const callExpressAPI = (predictionData) => {
      if (!image) {
        console.error("No file selected");
        return;
      }

      const expressFormData = new FormData();
      expressFormData.append("foodImg", image, image.name);
      expressFormData.append("name", predictionData.Food);
      expressFormData.append("calories", predictionData.Nutrition.Calories);
      expressFormData.append(
        "protein",
        predictionData.Nutrition["Protein (g)"]
      );
      expressFormData.append(
        "carbs",
        predictionData.Nutrition["Carbohydrates (g)"]
      );
      expressFormData.append("fats", predictionData.Nutrition["Fat (g)"]);
      expressFormData.append("fiber", predictionData.Nutrition["Fiber (g)"]);
      // Add other fields as needed

      const data = addFood(expressFormData);
      console.log(data);
    };
  };
  return (
    <>
      <Navbar />
      <Hero img="https://images.indianexpress.com/2023/12/food.jpg" text={"FOOD CLASSIFICATION"}/>
      <div className="container">
        <div className="row">
          <div>
            <div className="col-lg-12">
              <input
                type="file"
                p="1.5"
                accept="image/*"
                name="image"
                onChange={handleChange}
              />
              <br />
              <input
                type="submit"
                className="btn btn-success"
                value="Predict"
                onClick={handleSubmit}
              />
              {/* </form> */}
            </div>
          </div>
          {prediction && (
            <div>
              <p>Food: {prediction.Food}</p>
              <p>Nutrition:</p>
              <ul>
                <li>Calories: {prediction.Nutrition.Calories}</li>
                <li>Protein: {prediction.Nutrition["Protein (g)"]}</li>
                <li>Carbs: {prediction.Nutrition["Carbohydrates (g)"]}</li>
                <li>Fat: {prediction.Nutrition["Fat (g)"]}</li>
                <li>Fiber: {prediction.Nutrition["Fiber (g)"]}</li>
                {/* Add other nutrition values as needed */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
