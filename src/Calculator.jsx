import React, { useState } from "react";
import "./Calculator.css";
import { CiCalculator2 } from "react-icons/ci";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("Can you reach the number?");
  const [operation, setOperation] = useState("Please select transaction");

  const calculate = () => {
    let res;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operation) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      case "/":
        res = number2 !== 0 ? number1 / number2 : "Divide by zero error";
        break;
      default:
        res = "invalid transaction";
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>Hesap Makinesi</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="second number"
      />
      <select onChange={(e) => setOperation(e.target.value)}>
        <option value="">İşlem Seçin</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
    <div>
      
    <button onClick={calculate}>
    <CiCalculator2 />
      </button>
    </div>
      {result !== null && <h2>Sonuç: {result}</h2>}
    </div>
  );
};

export default Calculator;
