import React, { useEffect, useState } from "react";
import { getAllSession } from "../Services/food";
import "../Assets/CSS/Sessions.css";
import Navbar from "../Components/Navbar";
import { userProfile } from "../Services/user";
import { Hero } from "../Components/Hero";
import { Footer } from "../Components/Footer";

export const Session = () => {
  const [sessionData, setSessionData] = useState([]);
  const [cals, setCals] = useState(0);
  useEffect(() => {
    const fetchSession = async () => {
      const response = await getAllSession();
      const userCals = await userProfile();
      console.log(userCals.data);
      setCals(userCals.data.dailyCals);
      if (response.success) {
        setSessionData(response.data);
      }
    };
    fetchSession();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero
        img="https://images.slurrp.com/prod/articles/bhyishzuidl.webp"
        text={"User Sessions"}
      />
      <div className="session-table">
        {sessionData.length === 0 ? (
          <p>No session found</p>
        ) : (
          sessionData.map((session, index) => {
            return (
              <div key={index}>
                {/* <h3>Session {index + 1}</h3> */}
                <p>Session Date: {session.session.sessionDay}</p>
                <p>
                  Sessions Total Calories {session.totalCalories}{" "}
                  {session.totalCalories > cals ? (
                    <span style={{color: "green"}}>&#10004;</span>
                  ) : (
                    <span style={{color: "red"}}>&#10006;</span>
                  )}
                </p>
                {session.food.length === 0 ? (
                  <p>No food added</p>
                ) : (
                  <>
                    <table className="table table-image">
                      <thead>
                        <tr>
                          <th scope="col">Day</th>
                          <th scope="col">Food Image</th>
                          <th scope="col">Name</th>
                          <th scope="col">Calories</th>
                          <th scope="col">Proteins</th>
                          <th scope="col">Carbs</th>
                          <th scope="col">Fats</th>
                          <th scope="col">Fibers</th>
                        </tr>
                      </thead>
                      {session.food.map((food, index) => {
                        return (
                          <tbody>
                            <tr>
                              <th scope="row">{index + 1}</th>
                              <td className="w-25">
                                <img
                                  src={food.foodDetails.foodImg}
                                  className="img-fluid img-thumbnail session-img"
                                  alt="Sheep"
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
                          /* <img src={food.foodDetails.foodImg} alt="" />
                        <h5>Food {index + 1}</h5>
                        <p>Name: {food.foodDetails.name}</p>
                        <p>Calories: {food.foodDetails.calories}</p>
                        <p>Protein: {food.foodDetails.protein}</p>
                        <p>Carbs: {food.foodDetails.carbs}</p>
                        <p>Fats: {food.foodDetails.fats}</p>
                        <p>Fiber: {food.foodDetails.fiber}</p> */
                          /* <table>
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
                        </table> */
                        );
                      })}
                    </table>
                    <br />
                    <br />
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
};
