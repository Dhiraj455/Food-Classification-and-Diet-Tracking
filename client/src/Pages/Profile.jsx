import React, { useEffect, useState } from "react";
import { userProfile } from "../Services/user";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <h1>Profile</h1>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
        {userData.userData ? (
          <>
            <p>User Data:</p>
            <p>
              Gender: <strong>{userData.userData.gender}</strong>
            </p>
            <p>
              Age: <strong>{userData.userData.age}</strong>
            </p>
            <p>
              Height: <strong>{userData.userData.height}</strong>
            </p>
            <p>
              Weight: <strong>{userData.userData.weight}</strong>
            </p>
            <p>
              BMI: <strong>{userData.userData.BMI}</strong>
            </p>
            <p>
              Category: <strong>{userData.userData.category}</strong>
            </p>
            <p>User Goal:</p>
            <p>
              Weight: <strong>{userData.userGoal.weight}</strong>
            </p>
            <p>
              Carbs: <strong>{userData.userGoal.dailyCarbs}</strong>
            </p>
          </>
        ) : (
          <>User data not added</>
        )}
      </div>
      <button onClick={() => navigate("/update")}>Update</button>
    </div>
  );
};
