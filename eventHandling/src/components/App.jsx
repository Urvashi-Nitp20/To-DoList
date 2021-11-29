import React, { useState } from "react";

function App() {
  var [colour ,setColour]=useState("white");
  var [name , setName]=useState("");
  var [value,setValue]=useState("");
  var style1={
    backgroundColor:colour,
  }
  function handleClick() {
    setColour("black");
  }
  function backToNormal() {
    setColour("white")
  }
  function handleChange(event) {
  //  value=event.target.value;
  //  console.log("hi"+value);
  setValue(event.target.value);
  }
  function goToLogin() {
    setName(value);
    
  }
 
  return (

    <div className="container">
      <h1>Hello  {name}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onMouseOver={handleClick} onMouseOut={backToNormal} onClick={goToLogin} style={style1}>Submit</button>
    </div>
  );
  }


export default App;
