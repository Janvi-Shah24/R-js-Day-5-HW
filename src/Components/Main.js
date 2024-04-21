import React, { useState } from "react";
import paraList from "./data.json";

import Card from "./Card";
import "./Style/main.css";
export default function Main() {
  const [value, setValue] = useState(+0);
  const [newArray, updateNewArray] = useState([]);

  function addPara() {
    if(value <0){
      alert("Enter valid number");
      return;
    }else if(value > 10){
      alert("Enter a number less than 10");
    }
    const sliceArray = paraList.slice(0, value);
  
    updateNewArray(sliceArray);
  }
  function changeValue(e) {
    const input = e.target.value;
    setValue(input);
  }

  return (
    <>
      <main className="main">
        <h2>Random Paragraph Generator</h2>
        <p><input type="number" value={value} onChange={(e) => changeValue(e)} />
        <button onClick={addPara}>Generator</button></p>
        <div className="card-container">
          {newArray.map((ele) => (
            <Card arya={ele} />
          ))}
          
        </div>
      </main>
    </>
  );
}