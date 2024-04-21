import React, { useEffect, useState } from "react";
import { getAddons } from "../Services/food";

export const ViewAddon = (props) => {
  const [addonData, setAddonData] = useState([]);
  const [data, setData] = useState({
    foodId: props.id,
  });
  useEffect(() => {
    getAddons(props.id).then((response) => {
      console.log(response.data);
      setAddonData(response.data);
    });
  }, []);
  return (
    <div className="popup">
      <div className="popup_inner">
        <div className="text-center">
          <h1>{props.text}</h1>
          <div className="text-end">
            <button
              onClick={props.closePopup}
              style={{
                padding: "10px",
                border: "1px solid transparent",
                background: "#fff",
              }}
            >
              &#10006;
            </button>
          </div>
        </div>
        <div className="text-center">
          <table className="table table-image">
            <thead>
              <tr>
                {/* <th scope="col">Food Image</th> */}
                <th scope="col">Name</th>
                <th scope="col">Calories</th>
                <th scope="col">Grams</th>
                {/* <th scope="col">Carbs</th>
                <th scope="col">Fats</th>
                <th scope="col">Fibers</th> */}
              </tr>
            </thead>
            <tbody>
              {addonData.map((addon, index) => {
                return (
                  <tr>
                    <td>{addon.name}</td>
                    <td>{addon.calories}</td>
                    <td>{addon.grams}</td>
                    {/* <td>{food.foodDetails.carbs}</td>
                            <td>{food.foodDetails.fats}</td>
                            <td>{food.foodDetails.fiber}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
