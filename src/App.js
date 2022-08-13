import "./App.css";
import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <h1>Hello React!</h1>
      <Tweet name="Chaa97" message="This is a Random Tweet by Cha." />
      <Tweet name="Tharushi06" message="This is a Random Tweet by Tharushi." />
      <Tweet name="Chala06" message="This is a Random Tweet by Chala06." />
      <Tweet name="Naviya00" message="This is a Random Tweet by Naviya00" />
      <button>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
