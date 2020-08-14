import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import Layout from "./components/layout";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import Account from "./components/account/account";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(
  compose(
    (window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f)(createStore)
  )
);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />

            <Route path="/account" exact component={Account} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
