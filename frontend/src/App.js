import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import Dashboard from "./src1/dashboard";
import Test from "./src1/test";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute path="/dashboard/:title" exact children={<Test />} />
            <PrivateRoute component={Dashboard} path="/" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register1203" />
            {/* <Route component={Dashboard} path="/" /> */}
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
