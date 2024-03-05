import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  useEffect(()=>{
    console.log("her zaman çalışır")
  })
  useEffect(()=>{
    console.log("component ilk render edildiğinde çalışır")
  },[])

  useEffect(()=>{
    console.log("ilk render edildiğinde ve firstname state değeri değiştiğinde çalışır");
  },[firstName,])
  useEffect(()=>{
    console.log("ilk render edildiğinde ve lastname state değeri değiştiğinde çalışır");
  },[lastName,])
  return (
    <>
    
      <h1>useEffect</h1>
      <button onClick={()=> setFirstName("burak")}>adı değiştir</button>
      <button onClick={()=> setFirstName("özcan")}>soyadı değiştir</button>

    </>
  );
}

export default App;
