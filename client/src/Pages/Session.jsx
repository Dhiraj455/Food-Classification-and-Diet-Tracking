import React, { useEffect, useState } from "react";
import { getAllSession } from "../Services/food";
import "../Assets/CSS/Sessions.css";
import Navbar from "../Components/Navbar";
import { userProfile } from "../Services/user";
import { Hero } from "../Components/Hero";
import { Footer } from "../Components/Footer";
import { Addons } from "../Components/Addons";
import { ViewAddon } from "../Components/ViewAddon";

export const Session = () => {
  const [sessionData, setSessionData] = useState([]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [openViewPopUp, setOpenViewPopUp] = useState(false);
  const [foodId, setFoodId] = useState("");
  const [addonText, setAddonText] = useState("Add Addons");
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

  const closePopup = () => {
    setOpenPopUp(false);
    setOpenViewPopUp(false);
  };

  const addOpenPop = (id, text) => {
    setOpenPopUp(true);
    setFoodId(id);
    setAddonText(text);
  };

  const viewOpenPop = (id, text) => {
    setOpenViewPopUp(true);
    setFoodId(id);
    setAddonText(text);
  };

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
                    <span style={{ color: "green" }}>&#10004;</span>
                  ) : (
                    <span style={{ color: "red" }}>&#10006;</span>
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
                          <th scope="col">Addons</th>
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
                              <td>
                                <button
                                  className="btn1"
                                  onClick={() => {
                                    addOpenPop(food._id, "Add Addons");
                                  }}
                                >
                                  Add
                                </button>
                                <button
                                  className="btn1"
                                  onClick={() => {
                                    viewOpenPop(food._id, "View Addons");
                                  }}
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          </tbody>
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
      {openPopUp ? (
        <Addons closePopup={closePopup} text={addonText} id={foodId} />
      ) : (
        ""
      )}
      {openViewPopUp ? (
        <ViewAddon closePopup={closePopup} text={addonText} id={foodId} />
      ) : (
        ""
      )}
    </div>
  );
};
