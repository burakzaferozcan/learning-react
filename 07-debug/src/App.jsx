import { useState } from "react";
import "./App.css";

function App() {
  const [vize, setVize] = useState(0);
  const [final, setFinal] = useState(0);
  const [ortalama, setOrtalama] = useState(0);
  const ortalamaBul = () => {
    debugger;
    const sonuc = topla() / 2;
    setOrtalama(sonuc);
  };

  const topla = () => {
    debugger;
    const toplam = vize + final;
    return toplam;
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={vize}
          onChange={(e) => setVize(Number(e.target.value))}
        />
      </div>
      <div>
        <input
          type="number"
          value={final}
          onChange={(e) => setFinal(Number(e.target.value))}
        />
      </div>

      <button onClick={ortalamaBul}>ortalama bul</button>
      <p>ortalama : {ortalama}</p>
    </>
  );
}

export default App;
