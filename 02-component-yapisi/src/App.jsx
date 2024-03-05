import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import { users } from "./components/Login";

function App() {
  users.forEach((user)=> {
    console.log(user.username);
  });
  return (
    <>
      <Login></Login>
    </>
  );
}

export default App;
