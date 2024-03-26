import React, { useEffect, useState } from "react";
import { getAllSession } from "../Services/food";
import "./Sessions.css";
import { useNavigate } from "react-router-dom";

export const Session = () => {
  const navigate = useNavigate();
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
      <button onClick={() => navigate("/dashboard")} style={{ padding: "10px" }}>Dashboard</button>
      <button onClick={() => navigate("/profile")} style={{ padding: "10px" }}>Profile</button>
      <h1>All User's Sessions</h1>
      {sessionData.length === 0 ? (
        <p>No session found</p>
      ) : (
        sessionData.map((session, index) => {
          return (
            <div key={index}>
              <h3>Session {index + 1}</h3>
              <p>Session Date: {session.session.sessionDay}</p>
              <p>Sessions Total Calories {session.totalCalories} </p>
              {session.food.length === 0 ? (
                <p>No food added</p>
              ) : (
                session.food.map((food, index) => {
                  return (
                    <div key={index}>
                      {/* <img src={food.foodDetails.foodImg} alt="" />
                      <h5>Food {index + 1}</h5>
                      <p>Name: {food.foodDetails.name}</p>
                      <p>Calories: {food.foodDetails.calories}</p>
                      <p>Protein: {food.foodDetails.protein}</p>
                      <p>Carbs: {food.foodDetails.carbs}</p>
                      <p>Fats: {food.foodDetails.fats}</p>
                      <p>Fiber: {food.foodDetails.fiber}</p> */}
                      <table>
                        <thead>
                          <tr>
                            <th>Sr No.</th>
                            <th>Food Image</th>
                            <th>Food</th>
                            <th>Calories</th>
                            <th>Protein</th>
                            <th>Carbs</th>
                            <th>Fats</th>
                            <th>Fiber</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src={food.foodDetails.foodImg}
                                alt=""
                                style={{ height: "70px", width: "70px" }}
                              />
                            </td>
                            <td>{food.foodDetails.name}</td>
                            <td>{food.foodDetails.calories}</td>
                            <td>{food.foodDetails.protein}</td>
                            <td>{food.foodDetails.carbs}</td>
                            <td>{food.foodDetails.fats}</td>
                            <td>{food.foodDetails.fiber}</td>
                          </tr>
                        </tbody>
                      </table>
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
