import React from "react";
import ReactDOM from "react-dom/client";
import * as React from "react";
import Header from "./components/Header";
import Body from "./components/Body"; 
import RestaurantCard from "./components/RestaurantCard";


let Applayout = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
