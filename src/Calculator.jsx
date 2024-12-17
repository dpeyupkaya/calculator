import React, { useState } from "react";
import "./Calculator.css";
import { CiCalculator2 } from "react-icons/ci";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("sayı girsene");
  const [operation, setOperation] = useState("işlemde seç");

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
        res = number2 !== 0 ? number1 / number2 : "Sıfıra bölme hatası";
        break;
      default:
        res = "Geçersiz işlem";
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
        placeholder="Birinci sayı"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="İkinci sayı"
      />
      <select onChange={(e) => setOperation(e.target.value)}>
        <option value="">İşlem Seçin</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={calculate}>
        <CiCalculator2 />
      </button>
      {result !== null && <h2>Sonuç: {result}</h2>}
    </div>
  );
};

export default Calculator;
