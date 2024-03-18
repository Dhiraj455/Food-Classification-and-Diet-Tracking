import React, { useEffect, useState } from "react";
import { userProfile, userUpdate } from "../Services/user";
import { useNavigate } from "react-router-dom";

export const UpdateUser = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await userProfile();
      console.log(response);
      setUserData(response.data);
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userUpdate(userData);
    console.log(response);
    navigate("/profile");
  }
  // age, height, weight, gender, goal Update this data
  return (
    <div>
      <form className="form-horizontal">
        <fieldset>
          <div id="legend">
            <legend class="">Update User</legend>
          </div>
          <div class="control-group">
            <label class="control-label" for="username">
              Username
            </label>
            <div class="controls">
              <input
                type="text"
                id="username"
                name="username"
                placeholder=""
                class="input-xlarge"
                value={userData.username}
                onChange={handleChange}
              />
              <p
                class="help-block
                        "
              >
                Username can contain any letters or numbers, without spaces
              </p>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label" for="email">
              E-mail
            </label>
            <div class="controls">
              <input
                type="text"
                id="email"
                name="email"
                placeholder=""
                class="input-xlarge"
                value={userData.email}
              />
              <p
                class="help-block
                        "
              >
                Please provide your E-mail
              </p>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" for="age">
              Age
            </label>
            <div className="controls">
              <input
                type="number"
                id="age"
                name="age"
                placeholder=""
                className="input-xlarge"
                value={
                  userData.userData
                    ? userData.userData.age
                    : userData.age
                    ? userData.age
                    : ""
                }
                onChange={handleChange}
              />
              <p className="help-block">Please provide your age</p>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" for="gender">
              Gender
            </label>
            <div className="controls">
              <select
                id="gender"
                name="gender"
                className="input-xlarge"
                value={
                  userData.userData
                    ? userData.userData.gender
                    : userData.gender
                    ? userData.gender
                    : ""
                }
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" for="height">
              Height
            </label>
            <div className="controls">
              <input
                type="number"
                id="height"
                name="height"
                placeholder=""
                className="input-xlarge"
                value={
                  userData.userData
                    ? userData.userData.height
                    : userData.height
                    ? userData.height
                    : ""
                }
                onChange={handleChange}
              />
              <p className="help-block">Please provide your height</p>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" for="weight">
              Weight
            </label>
            <div className="controls">
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder=""
                className="input-xlarge"
                value={
                  userData.userData
                    ? userData.userData.weight
                    : userData.weight
                    ? userData.weight
                    : ""
                }
                onChange={handleChange}
              />
              <p className="help-block">Please provide your weight</p>
            </div>
          </div>
          <div className="control-group">
            <label className="control-label" for="goal">
              Goal
            </label>
            <div className="controls">
              <input
                type="number"
                id="goal"
                name="goal"
                placeholder=""
                className="input-xlarge"
                value={
                  userData.userGoal
                    ? userData.userGoal.goal
                    : userData.goal
                    ? userData.goal
                    : ""
                }
                onChange={handleChange}
              />
              <p className="help-block">Please provide your goal weight</p>
            </div>
          </div>
        </fieldset>
      </form>
      <button onClick={handleSubmit}>Update/Submit</button>
    </div>
  );
};
