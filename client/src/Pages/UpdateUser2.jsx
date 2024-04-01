import React, { useEffect, useState } from "react";
import { userProfile, userUpdate } from "../Services/user";
import { useNavigate } from "react-router-dom";
import "../Assets/CSS/Profile.css";
import Navbar from "../Components/Navbar";

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
  };

  return (
    <div>
      <Navbar />
      <div className="container-xl px-4 mt-4">
        <h2 style={{ color: "white" }}>User Update</h2>
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-12">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="username mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      name="username"
                      value={userData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      value={userData.email}
                    />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        Age
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="number"
                        placeholder="Enter your first name"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="form-control"
                        value={userData.gender}
                        onChange={handleChange}
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Weight (kg)
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="number"
                        placeholder="Enter your phone number"
                        name="weight"
                        value={userData.weight}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">
                        Height (cm)
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="number"
                        name="height"
                        placeholder="Enter your birthday"
                        value={userData.height}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Goal Weight (kg)
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="number"
                        placeholder="Enter your phone number"
                        name="goal"
                        value={userData.goal}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
