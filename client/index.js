import React from "react";
import { render } from "react-dom";
import App from "./views/app";
import Home from "./views/home/home";


import style from "./styles/main.scss";

import { BrowserRouter, Route } from "react-router-dom";

render(
  <BrowserRouter>
    <Route exact path="/:page?/" component={App} />
  </BrowserRouter>,
  document.getElementById("root")
);
