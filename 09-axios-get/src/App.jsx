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
    const  {data}  = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(data);
  };
  useEffect(() => {
    getAllUsers();
    getUserById(2)
  });
  return <>
  

  </>;
}

export default App;
