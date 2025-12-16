import { useState } from "react";
//mini calculator app
 function App(){
  const [input1, setInputA] = useState("");
  const [input2, setInputB] = useState("");
  const [res, setRes] = useState(0);
  return (
    <div>
    <h1>Mini Calculator App</h1>
      <input  value={input1} onChange={e => setInputA(e.target.value)} />
      <input  value={input2} onChange={e => setInputB(e.target.value)} />

      <button onClick={() => setRes(Number(input1)+ Number(input2))}>+</button>
      <button onClick={() => setRes(Number(input1)- Number(input2))}>-</button>
      <button onClick={() => setRes(Number(input1)* Number(input2))}>*</button>
      <button onClick={() => setRes(Number(input1)/ Number(input2))}>/</button>
      <p>Result: {res}</p>
      </div>
      
  );
 }
 export default App;