import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Favorites } from "./pages/Favorites";
import { Basket } from "./pages/Basket";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";




function App() {
  return (
    <React.Fragment>

      <Layout>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
            <Route exact path="/basket" component={Basket}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
      </Layout>

    </React.Fragment>
  );
}

export default App;
