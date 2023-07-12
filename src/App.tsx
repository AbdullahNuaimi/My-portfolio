import React from "react";
import "./App.css";
import { Header, Section1, Section2, Section3, Section4 } from "./components";
function App() {
  return (
    <div className="App scroll-smooth">
      <Header />
      <Section1/>
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
