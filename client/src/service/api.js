import axios from "axios";

// const url = "http://localhost:8080";
const url = "https://chat-app-4gs2.onrender.com";

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

export const setConversation = async (data) => {
  try {
    await axios.post(`${url}/conversation/add`, data);
  } catch (error) {
    console.log("Error in setConversation:", error.message);
  }
};
export const getConversation = async (data) => {
  try {
    let response = await axios.post(`${url}/conversation/get`, data);
    return response.data;
  } catch (error) {
    console.log("Error in getConversation:", error.message);
  }
};

export const newMessage = async (data) => {
  try {
    let response = await axios.post(`${url}/message/add`, data);
    return response.data;
  } catch (error) {
    console.log("Error in newMessage:", error.message);
  }
};
export const getMessage = async (id) => {
  try {
    let response = await axios.get(`${url}/message/get/${id}`);
    console.log("response:", response.data);
    return response.data;
  } catch (error) {
    console.log("Error in getMessage:", error.message);
  }
};

export const UploadFile = async (data) => {
  
  try {
    return await axios.post(`${url}/file/upload`, data);
  } catch (error) {
    console.log("Error in UploadFile:", error.message);
  }
};
