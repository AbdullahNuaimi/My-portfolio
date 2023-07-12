import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="p-6 max-w-sm mx-auto bg-gradient-to-r justify-start from-cyan-500 to-blue-500 shadow-lg flex items-center space-x-4 rounded-full">
        <div className="shrink-0"></div>
        <div>
          <div className="text-xl font-medium text-white flex justify-start align-middle h-fit">ChitChat</div>
          <p className="text-white">You have a new message!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
