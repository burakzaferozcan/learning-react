import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "http://localhost:3005";
function App() {
  const getAllUsers = async () => {
    const { data } = await axios.get(`${BASE_URL}/users`);
    console.log(data);
  };
  const getUserById = async (userId) => {
    const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(data);
  };
  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response",response.data);
  };
  const newUser={
    "username": "ozcan",
    "password": "yyy"
  }
  useEffect(() => {
    // getAllUsers();
    // getUserById(2);
    createUser(newUser);
  },[]);
  return <></>;
}

export default App;
