import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import TabGrid from "components/cards/TabCardGrid";
import Playerinfo from "playerinfo";
import Dashboard from "dashboard";
import LoginPage from "pages/Login.js";
import Playerscreen from "playerscreen";
import ReactModalAdapter from "helpers/ReactModalAdapter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SimpleContactUs from "components/forms/SimpleContactUs.js";
import Test from "test";
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
        <Route path="/dashboard/:title" exact children={<Test />}></Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/playerscreen">
          <Playerscreen />
        </Route>
      </Switch>
    </Router>
  );
}


// import React, { useState } from "react";
// import styles from "./App.module.css";

// import Modal from "./components/Modal";

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <main>
//       <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
//         Open Modal
//       </button>
//       {isOpen && <Modal setIsOpen={setIsOpen} />}
//     </main>
//   );
// };

// export default App;