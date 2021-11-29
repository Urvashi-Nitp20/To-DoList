import React from "react";
function Heading() {
  var style = {
    color: "red",
    fontSize: "30px"
  };
  var time = new Date().getHours();
  var msg;
  if (time > 0 && time < 12) {
    msg = "Good Morning";
  } else if (time < 18) {
    msg = "Good Afternoon";
    style.color = "blue";
  } else {
    msg = "Good Evening";
    style.color = "green";
  }
  return <h1 style={style}>{msg}</h1>;
}

export default Heading;
