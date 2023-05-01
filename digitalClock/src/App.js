import React, { useState } from 'react';
import './App.css';
import laptop from "./assets/laptopView.png";

function App() {

  var findAmorPm = new Date().getHours() >= 12 ? "PM" : "AM";
  // var findHours = new Date().getHours() % 12;
  // findHours = findHours < 10 ? "0"+findHours : findHours;

  // var findMinutes = new Date().getMinutes();
  // findMinutes = findMinutes < 10 ? "0"+findMinutes : findMinutes; 

  // var findSeconds = new Date().getSeconds();
  // findSeconds = findSeconds < 10 ? "0"+findSeconds : findSeconds;
  
  const [hours,setHours] = useState(new Date().getHours());
  const [minutes,setMinutes] = useState(new Date().getMinutes());
  const [seconds,setSeconds] = useState(new Date().getSeconds());

 

  const [amPm,setAmPm] = useState(findAmorPm);

  const updateTime = () => {
    var findAmorPm = new Date().getHours() >= 12 ? "PM" : "AM";
  var findHours = new Date().getHours() % 12;
  findHours = findHours < 10 ? "0"+findHours : findHours;

  var findMinutes = new Date().getMinutes();
  findMinutes = findMinutes < 10 ? "0"+findMinutes : findMinutes; 

  var findSeconds = new Date().getSeconds();
  findSeconds = findSeconds < 10 ? "0"+findSeconds : findSeconds;
    setHours(findHours);
    setMinutes(findMinutes);
    setSeconds(findSeconds);
    setAmPm(findAmorPm);
  }

  setInterval (updateTime,1000);

// console.log(findHours);

  return (
    <div className="App">
     <h2 className='heading'> The time is now </h2>
     <div className='time'>
        <div> <span> {hours} </span><span> Hours </span> </div>
        <div> <span> {minutes} </span><span> Minutes </span> </div>
        <div> <span> {seconds} </span><span> Seconds </span> </div>
       <p> {amPm} </p>
     </div>
    </div>
  );
}

export default App;
