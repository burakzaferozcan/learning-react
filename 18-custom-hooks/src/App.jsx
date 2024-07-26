import { useState } from "react";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useCopyToClipboard from "./hooks/useCopyToClipboard";

function App() {
  const { count, increase, decrease } = useCounter();
  const { open, toggle } = useToggle();
  let text = "kopyalanacak yazı";
  const { copied, copy } = useCopyToClipboard(text);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={increase}>arttır</button>
        <button onClick={decrease}>azalt</button>
      </div>

      <br />
      <br />
      <br />

      <div>
        <button onClick={toggle}>{open ? "Gizle" : "Göster"}</button>
        {open && (
          <div
            style={{ backgroundColor: "red", height: "100px", width: "100px" }}
          ></div>
        )}
      </div>

      <br />
      <br />
      <br />

      <div>
        <p>{text}</p>
        <button onClick={copy}>Kopyala</button>
        {copied && "kopyalandı"}
      </div>
    </>
  );
}

export default App;
