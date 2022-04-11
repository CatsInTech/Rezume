import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  function handleSubmit() {
    if (email === "") {
      setEmailError("Required");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("No Password provided");
    } else {
      setPasswordError("");
    }
  }

  return (
    <div className="container">
      <div className="loginform">
        <h1>Log In</h1>
        <div className="emailField">
          <input
            className="inputEmail"
            type="email"
            placeholder="Email"
            autocomplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="alert">{emailError}</div>
        </div>
        <div>
          <input
            className="inputPassword"
            type="password"
            placeholder="Password"
            autocomplete="off"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="alert">{passwordError}</div>
        </div>
        <div className="Submit-form">
          <div>
            <input
              className="inputSubmit"
              type="submit"
              value="Login"
              onClick={handleSubmit}
            />
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
