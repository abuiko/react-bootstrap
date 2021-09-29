import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { User } from "./User";
import { Favorites } from "./Favorites";
import { Basket } from "./Basket";
import { NoMatch } from "./NoMatch";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          <Route exact path="/basket" component={Basket}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
