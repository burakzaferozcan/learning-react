import React, { useEffect, useState } from "react";
import axios from "axios";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const BASE_URL = `https://api.freecurrencyapi.com/v1/latest`;
  const API_KEY = "VYw9NrayG6Nboqus24vuIYpT37WVv6q9CfJAaYzc";

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = response.data.data[toCurrency] * amount;
    setResult(result);
  };

  useEffect(() => {
    exchange();
  }, []);

  return (
    <div className="currency-div">
      <h1>döviz kuru uygulaması</h1>
      <div>
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          name=""
          id=""
          className="from-currency-option"
          value={fromCurrency}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          name=""
          id=""
          className="to-currency-option"
          value={toCurrency}
        >
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          type="number"
          className="result"
          onChange={(e) => setResult(e.target.value)}
          value={result}
        />
      </div>
      <button onClick={exchange}>çevir</button>
    </div>
  );
}

export default Currency;
