import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestrauntCard from "./components/RestrauntCard";
import Body from "./components/Body";

// console.log(resList[0].restaurants[0].name);
// console.log(resList[0].restaurants[0].id);
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
