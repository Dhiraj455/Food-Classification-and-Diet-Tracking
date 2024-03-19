import React, { useEffect, useState } from "react";
import { getAllSession } from "../Services/food";

export const Session = () => {
  const [sessionData, setSessionData] = useState([]);
  useEffect(() => {
    const fetchSession = async () => {
      const response = await getAllSession();
      if (response.success) {
        setSessionData(response.data);
      }
    };
    fetchSession();
  }, []);
  return (
    <div>
      <h1>All User's Sessions</h1>
      {sessionData.length === 0 ? (
        <p>No session found</p>
      ) : (
        sessionData.map((session, index) => {
          return (
            <div key={index}>
              <h3>Session {index + 1}</h3>
              <p>Session Date: {session.session.sessionDay}</p>
              <h4>Food</h4>
              {session.food.length === 0 ? (
                <p>No food added</p>
              ) : (
                session.food.map((food, index) => {
                  return (
                    <div key={index}>
                      <img src={food.foodDetails.foodImg} alt="" />
                      <h5>Food {index + 1}</h5>
                      <p>Name: {food.foodDetails.name}</p>
                      <p>Calories: {food.foodDetails.calories}</p>
                      <p>Protein: {food.foodDetails.protein}</p>
                      <p>Carbs: {food.foodDetails.carbs}</p>
                      <p>Fats: {food.foodDetails.fats}</p>
                      <p>Fiber: {food.foodDetails.fiber}</p>
                    </div>
                  );
                })
              )}
            </div>
          );
        })
      )}
    </div>
  );
};
