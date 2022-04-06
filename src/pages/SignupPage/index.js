import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container">
      <div className="loginform">
        <h1>Sign up</h1>
        <div>
          <input
            className="input"
            type="email"
            placeholder="Email"
            autocomplete="off"
            required
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            placeholder="Password"
            autocomplete="off"
            required
          />
        </div>
        <div>
          <input
            className="input"
            type="password"
            placeholder="Confirm Password"
            autocomplete="off"
            required
          />
        </div>
        <div className="Submit-form">
          <div>
            <input className="inputSubmit" type="submit" value="Signup" />
          </div>
          <div>
            <Link to="/login"> Already Registered?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
