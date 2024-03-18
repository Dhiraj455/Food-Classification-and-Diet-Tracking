import axios from "axios";

export const userLogin = async (userData) => {
  try {
    const response = await axios.post("/api/v1/user/login", userData);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const userProfile = async () => {
  try {
    const response = await axios.get("/api/v1/user/profile");
    return response.data;
  } catch (error) {
    return error;
  }
};

export const userUpdate = async (userData) => {
    try {
        const response = await axios.put("/api/v1/user/update", userData);
        return response.data;
    } catch (error) {
        return error;
    }
}
