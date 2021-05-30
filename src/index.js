//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";
const name = "Abhay Tomar";
const number = 7;

ReactDom.render(
  <div>
    <h1>Creating react-app by {name} </h1>
    <ul>
      <li> import React </li>
      <li> import ReactDom </li>
      <li> import create Reacte Dom method </li>
    </ul>
    <p>My lucky number is {Math.floor(Math.random() * number + 1)} </p>
  </div>,
  document.getElementById("root")
);
