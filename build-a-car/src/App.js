import "./App.css";
import React from "react";
import Car from "./Car";
import Bicycle from "./Bicycle";
import Truck from "./Truck";
import Bus from "./Bus";
import Skateboard from "./Skateboard";

function App() {
  return (
    <div className="App">
      <Car numberOfWheels={4}/>
      <Bicycle numberOfWheels={2}/>
      <Truck numberOfWheels={4}/>
      <Bus numberOfWheels={4}/>
      <Skateboard numberOfWheels={2}/>
    </div>
  );
}

export default App;
