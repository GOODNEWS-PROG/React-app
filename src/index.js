import React from "react";
import ReactDom from "react-dom";

let time = new Date();
let hour = time.getHours();
let greetings = "";
if (hour >= 0 && hour < 12) {
  greetings = "Good Morning";
} else if (hour >= 12 && hour < 17) {
  greetings = "Good After noon";
} else {
  greetings = "Good Evening";
}
ReactDom.render(
  <div>
    <h1>{greetings} </h1>
  </div>,
  document.getElementById("root")
);
