import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";
import { getAllUsers } from "./redux/user/userSlice";
import UserList from "./components/UserList";
function App() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.user);
  console.log(users);
  console.log(value);
  useEffect(() => {
    dispatch(getAllUsers());
    console.log(users);
  }, []);

  return (
    <>
      <h1>redux giriş</h1>
      <p>{value}</p>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
      {users && users.map((user) => <UserList key={user.id} user={user} />)}
    </>
  );
}

export default App;
