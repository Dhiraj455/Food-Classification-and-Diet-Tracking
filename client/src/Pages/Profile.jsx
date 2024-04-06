import React, { useEffect, useState } from "react";
import { userProfile } from "../Services/user";
import { useNavigate } from "react-router-dom";
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import "../Assets/CSS/Profile.css";
import Navbar from "../Components/Navbar";
import { Hero } from "../Components/Hero";
import { Footer } from "../Components/Footer";

export const Profile = () => {
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
  return (
    <>
    <Navbar />
    <Hero img="https://static.vecteezy.com/system/resources/previews/021/736/678/original/background-biru-keren-dan-kosong-abstract-untuk-template-desain-powerpoint-ppt-free-vector.jpg" text={"User Profile"}/>
      <div className="container-xl px-4 mt-4">
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt=""
                />
                <div className="small font-italic text-muted mb-4">
                  <h4>Name : {userData.username}</h4>
                  <h4>Email : {userData.email}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFirstName">
                      Age
                    </label>
                    <p className="form-control">
                      {userData.age}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLastName">
                    Gender
                    </label>
                    <p className="form-control">
                      {userData.gender}
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Weight (Kg)
                  </label>
                  <p className="form-control">
                      {userData.weight}
                    </p>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Height (cm)
                    </label>
                    <p className="form-control">
                      {userData.height}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">
                    Goal Weight (kg)
                    </label>
                    <p className="form-control">
                      {userData.goal}
                    </p>
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      BMI
                    </label>
                    <p className="form-control">
                      {userData.BMI}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">
                    Category
                    </label>
                    <p className="form-control">
                      {userData.category}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">
                    Calories Required
                    </label>
                    <p className="form-control">
                      {userData.dailyCals}
                    </p>
                  </div>
                </div>
                <button className="btn btn-primary" type="button" onClick={() => navigate("/update")}>
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
