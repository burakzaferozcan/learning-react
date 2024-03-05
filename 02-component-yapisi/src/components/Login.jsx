import React from "react";
export const users = [
  {
    username: "John",
    password: "1",
  },
  {
    username: "Jane",
    password: "2",
  }
];

function Login() {
  return (
    <>
      <div>
        <p>username</p>
        <input type="text" />
      </div>
      <div>
        <p>password</p>
        <input type="password" name="" id="" />
      </div>
      <div>
        <button>login</button>
      </div>
    </>
  );
}

export default Login;
