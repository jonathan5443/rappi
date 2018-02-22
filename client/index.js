import React from "react";
import { render } from "react-dom";
import App from "./views/app";
import Home from "./views/home/home";
import { Provider } from 'react-redux';
import { store } from './redux'

import style from "./styles/main.scss";

import { BrowserRouter, Route } from "react-router-dom";

render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);