import "./App.css";
import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [user, setUsers] = useState([
    { name: "Cha97", message: "Hy Guys" },
    { name: "Tharushi", message: "I am Tharu" },
    { name: "Chala", message: "Hello World!" },
  ]);
  return (
    <div className="app">
      {user.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
