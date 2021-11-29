import React from "react"; //it is used to require the react  and react dom dependency inside our project   ----- we use import word in react to require depedencies
import ReactDOM from "react-dom";
//if we want to include two or more elements inside render then we need to wrap it inside a single tagname

/*
const name = "Urvashi";
const fName = "urvashi";
const lName = "kashyap"
ReactDOM.render(<div>
  <h1> hello  {name} </h1>
  <p> bye { fName+ " "+lName}</p>
  </div>
  ,document.querySelector("#root"));*/

//we target the div with id root where we need to place the content
// line 8 -->to use js expression(expression is something which result  into any value NOTE: we cannot use statements) in html we need to use {} ,,,inside h1 whatever we write it is treated as string so to  incorparate js variables in it we use {}
//line7-->to use html in js we are using render

//Video 7 practice

/* var year= new Date().getFullYear();
//used to get year in vanilla js
 const name = "Urvashi";
 ReactDOM.render(<div>
 <h5>COPYRIGHT @ {year} </h5>
 <p> CREATED BY  {name} </p>
 </div>
 ,document.querySelector("#root"));*/

//JSX ATTRIBUTES
//class in simple html is changed to className in JSX

/*ReactDOM.render(<div>
  <h1 className="red">hello</h1>
  <p> bye</p>
  </div>
  ,document.querySelector("#root"));*/

//adding class using int4ernal css using objects in js
//everything is camelcased as js in jsx
//we can target thru tagname

//NOTE: img must be closed unlike html where closed or unclosed img tag doesn't matter

/*
const link="https://picsum.photos/200/300"
ReactDOM.render(<div>
  <h1 contentEditable="true" spellCheck="false"> hello </h1>
  <img className ="imagesSize"src="https://wallpaperaccess.com/full/2117773.jpg" alt=" "/>

  <img className ="imagesSize"src="https://s3.envato.com/files/316739116/DSC_2125-Exposure%200000.jpg" alt=" "/>
  <img src={link +"?grayscale"} alt=" "/>
  </div>
  ,document.querySelector("#root"));*/

//INLINE STYLING

//style cannot  bee used as src becoz it is not comprised of only variable  but it is like object  (structure)

//two differences are there i)  valuee of property is set thru string
//ii)"," is used in place of ";"

//font-size is changed fontSize

/*var style={
  color:"red",
  fontSize:"30px",
  border:"1px solid red"
}

ReactDOM.render(<h1 style={style}>hello world</h1>,document.querySelector("#root"))*/

//react syling practice

/*
var style={
  color:"red",
  fontSize:"30px",

}

var time =new Date().getHours();
var msg;
if(time>0 && time<12){
msg="Good Morning";

}
else if(time<18){
  msg="Good Afternoon";
  style.color="blue";
}
else{
  msg="Good Evening";
  style.color="green";
}


ReactDOM.render(<h1 style={style}>{msg}</h1>,document.querySelector("#root"))*/

//React component is allows us spilit up large component to smaller and reusable components
