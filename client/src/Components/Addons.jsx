import React, { useEffect, useState } from "react";
import "../Assets/CSS/Addons.css";
import { addAddons } from "../Services/food";

export const Addons = (props) => {
  const [addonData, setAddonData] = useState({});
  const handleChange = async (e) => {
    e.preventDefault();
    setAddonData({
      ...addonData,
      [e.target.name]: e.target.value,
    });
  };

  const addAddon = () => {
    addAddons(addonData);
    props.closePopup();
    alert("Addon Added")
  };

  useEffect(() => {
    setAddonData({
      ...addonData,
      "foodId": props.id,
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
        <div className="input-group">
          <div className="input-field">
            {/* <i className="fa-solid fa-envelope"></i> */}
            <input
              type="text"
              placeholder="Food Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="number"
              placeholder="Grams"
              name="grams"
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <input
              type="number"
              placeholder="Calories"
              name="calories"
              onChange={handleChange}
            />
          </div>
          <div className="button-field">
            <input
              type="submit"
              id="login"
              value="Add Addon"
              className="button"
              onClick={addAddon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
