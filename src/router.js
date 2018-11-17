import React from "react";
import { Router, Route, Switch } from "dva/router";
import AuthPage from "./routes/AuthPage";
import LandingPage from "./routes/LandingPage";
import AdminIndexPage from "./routes/AdminIndexPage";
import BuyerIndexPage from "./routes/BuyerIndexPage";
import SellerIndexPage from "./routes/SellerIndexPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/admin" component={AdminIndexPage} />
        <Route path="/seller" component={BuyerIndexPage} />
        <Route path="/buyer" component={SellerIndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
