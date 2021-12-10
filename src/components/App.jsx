import React, { useState } from "react";

function App() {
  const[inptext,setinptxt]  = useState("");
  const [items,setItems]=useState([]);
  function handleChange(event){
    const newValue=event.target.value;
    setinptxt(newValue);
  }
  function addItem(){
    setItems((prevItems)=>{
      return[...prevItems,inptext]
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map((toDoItem)=>{
          return <li>{toDoItem}</li>
        })}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
