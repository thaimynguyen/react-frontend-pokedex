import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import "./pokeStyles.sass";
import $ from "jquery";

$(document).ready(function () {
  // alert("Ready");
  // $("*").css("border", "1px solid red");
  $("#toggleBtn").click(function () {
    $(".biometrics").toggle();
  });
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
