import React from "react";
//import { isPropertySignature } from "typescript";
import Card from "./Card";
import emojipedia from "../emojipedia";
function createCard(emojipedia) {
    return <Card 
    key={emojipedia.id}
    emoji={emojipedia.emoji}
    name={emojipedia.name}
    meaning={emojipedia.meaning} 
     />
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
