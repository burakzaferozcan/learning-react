import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const BASE_URL = "http://localhost:3005";
function App() {
  const getUserById = async (userId) => {
    const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
    return data.postId;
  };
  const getPostById = async (postId) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return data;
  };
  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData);
  };

  useEffect(() => {
    getPost();
  }, []);

  return <></>;
}

export default App;
