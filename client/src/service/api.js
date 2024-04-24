import axios from "axios";

const url = "http://localhost:8080";

export const addUser = async (data) => {
  try {
    const fetchData = await axios.post(`${url}/add`, data);
    console.log("fetchData:", fetchData);
  } catch (error) {
    console.log("Error adding user: ", error);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${url}/users`);
    console.log("response:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error getting user: ", error);
  }
};
