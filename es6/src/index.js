import React from "react"; //it is used to require the react  and react dom dependency inside our project   ----- we use import word in react to require depedencies
import ReactDOM from "react-dom";
// import and export is from ES6 language

// we can have multiple returns frpm a single file with one compulsory default return
// and other are inside curly braces . To use this returns in  our indeex.js or App.jsx we can either do it like import var to store default {non default export unique names} from" file name"
// OR
// we can store all returns in an object
// by using import * as objectname from "file Name"
// and then access it using "." operator

import * as calc from "./calculator";
ReactDOM.render(
  <ul>
    <li>{calc.add(1, 2)}</li>
    <li>{calc.multiply(2, 3)}</li>
    <li>{calc.subtract(7, 2)}</li>
    <li>{calc.divide(5, 2)}</li>
  </ul>,

  document.querySelector("#root")
);
