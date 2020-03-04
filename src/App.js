import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../src/routes/routes";

class App extends Component {
  showContentsMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <div>
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          </div>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            {routes.map((router, index) => {
              return (
                <Route
                  key={index}
                  path={router.path}
                  exact={router.exact}
                  component={router.component}
                />
              );
            })}
          </Switch>
          {/* {this.showContentsMenus(routes)} */}
        </Router>
      </Fragment>
    );
  }
}

export default App;
