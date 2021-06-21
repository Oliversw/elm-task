import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
