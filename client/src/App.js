import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import TabGrid from "components/cards/TabCardGrid";
import Playerinfo from "playerinfo";
import Dashboard from "dashboard";
import LoginPage from "pages/Login.js";

import Modal from "modal";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SimpleContactUs from "components/forms/SimpleContactUs.js";

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/form">
          <SimpleContactUs />
        </Route>
        <Route path="/tabgrid">
          <TabGrid />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/f">
          <Playerinfo />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}
