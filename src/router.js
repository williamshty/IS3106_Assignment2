import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import AuthPage from "./routes/AuthPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
