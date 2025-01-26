import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("Sonuç burada görünecek");
  const [operation, setOperation] = useState("");

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Geçersiz giriş!");
      return;
    }

    let res;
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
        res = number2 !== 0 ? number1 / number2 : "Sıfıra bölme hatası!";
        break;
      case "%":
        res = number1 % number2;
        break;
      case "^":
        res = Math.pow(number1, number2);
        break;
      case "√":
        res = Math.sqrt(number1);
        break;
      default:
        res = "Lütfen bir işlem seçin!";
    }
    setResult(res);
  };

  return (
    <div className="calculator-container">
      <h1>Gelişmiş Hesap Makinesi</h1>
      <div className="input-group">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="İlk sayı"
          className="calculator-input"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="İkinci sayı"
          className="calculator-input"
          disabled={operation === "√"} // Karekök için ikinci sayıyı devre dışı bırak
        />
      </div>
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="operation-select"
      >
        <option value="">İşlem seçin</option>
        <option value="+">Toplama (+)</option>
        <option value="-">Çıkarma (-)</option>
        <option value="*">Çarpma (*)</option>
        <option value="/">Bölme (/)</option>
        <option value="%">Mod Alma (%)</option>
        <option value="^">Üs Alma (^)</option>
        <option value="√">Karekök (√)</option>
      </select>
      <button onClick={calculate} className="calculate-button">
        Hesapla
      </button>
      <h2 className="result">{result}</h2>
    </div>
  );
};

export default Calculator;