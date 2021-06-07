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
      {/* everything that's in between of this Router will have the ability to do routing */}
      <Router>
        <Nav />
        {/* this switch functions as the exact path */}
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
