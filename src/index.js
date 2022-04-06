import React from "react";
import ReactDOM from "react-dom";
import "./styles/App.scss";
import App from "./components/App.js";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
