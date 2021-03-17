import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import routes from "./index";
import ReactHelmet from "../components/helmet/ReactHelmet";
export default function RouterWrapper() {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            exact={route.exact}
            path={route.path}
            render={(props) => (
              <ReactHelmet description={route.description} title={route.title}>
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              </ReactHelmet>
            )}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
