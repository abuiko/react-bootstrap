import React from "react";
import { Route, Switch } from "react-router-dom";
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

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/basket">
            <Basket />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>

      </Layout>

    </React.Fragment>
  );
}

export default App;
