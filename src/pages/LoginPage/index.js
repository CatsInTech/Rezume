import React from "react";
import "./index.css"
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="container">
    <div className="loginform">
    <h1>Log In</h1>
      <div>
        <input className="input" type="email" placeholder="Email" autocomplete="off" required />
      </div>
      <div>
      <input className="input" type="password" placeholder="Password" autocomplete="off" required />
      </div>
      <div className="Submit-form">
        <div>
        
        <input className="inputSubmit" type="submit" value="Login"/>
        </div>
        <div>
        <Link to="/Signup">New User ?</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
