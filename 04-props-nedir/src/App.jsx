import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import Container from "./components/Container";

function App() {
  let productName = "buzdolabı";
  let price = 20000;
  return (
    <>
      <Container>
        <Product productName="ayakkabi" price={3200}></Product>
        <hr />
        <Product productName="telefon" price={15200}></Product>
        <hr />
        <Product productName={productName} price={price}></Product>
      </Container>
    </>
  );
}

export default App;
