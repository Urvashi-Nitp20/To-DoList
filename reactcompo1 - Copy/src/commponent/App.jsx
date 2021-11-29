import React,{useState} from "react";

function App() {
    var [time, setTime]=useState(new Date().toLocaleTimeString())
//console.log(time)
function updateTime() {
     time=new Date().toLocaleTimeString()
    setTime(time)
    
}
setInterval(
    updateTime
, 1000);
    return (
        <div className="App">
            <h1>{time}</h1>
            <button onClick={updateTime}>+</button>
        </div>
    );
}
export default App;