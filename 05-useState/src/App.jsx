import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("burak");
  const [lastName, setLastName] = useState("ozcan");

  function handleLastName() {
    setLastName("özcansss");
  }
  console.log("component render edildi");
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <div>
          {firstName} {lastName}
        </div>
        <div>
          <button
            style={{ margin: "1px" }}
            onClick={() => setFirstName("zafer")}
          >
            ismi degistir 1. yöntem
          </button>
          <button style={{ margin: "1px" }} onClick={handleLastName}>
            ismi degistir 2. yöntem
          </button>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div style={{ border: "1px solid", padding: "10px" }}>
        <div>{count}</div>

        <div>
          <button style={{ margin: "1px" }} onClick={() => setCount(count - 1)}>
            azalt
          </button>

          <button style={{ margin: "1px" }} onClick={() => setCount(count + 1)}>
            arttir
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
