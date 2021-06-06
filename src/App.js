import React from "react";
// npm i react-router-dom
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//that "as Router" above just renames the BrowserRouter as Router :)

const App = () => {
  return (
    <>
      <Nav />
      <About />
      <Shop />
    </>
  );
};

export default App;
