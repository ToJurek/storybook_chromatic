import React from 'react';
import './App.css';
import {FancyButton} from "./FancyButton/FancyButton";

function App() {

    const datas = [
        [10, 30, 40, 20],
        [10, 40, 30, 20, 50, 10],
        [60, 30, 40, 20, 30]
    ]

  return (
    <div className="App">
      <FancyButton text="Hover Me" />
    </div>
  );
}

export default App;
