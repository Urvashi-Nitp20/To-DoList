import React, { useState } from "react";

function App() {
const [lname,setLname]=useState("");
const [fname,setFname]=useState("");
function handleChange2(event){
setFname(event.target.value)
}
function handleChange1(event){
setLname(event.target.value)
}

  return (
    <div className="container">
      <h1>Hello  {fname}  {lname}</h1>
      <form>
        <input onChange={handleChange2} name="fName" placeholder="First Name" />
        <input onChange={handleChange1} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
