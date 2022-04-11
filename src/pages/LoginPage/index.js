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
      <form className="loginform">
        <h1>Log In</h1>
        <input
          className="inputEmail"
          type="email"
          placeholder="Email"
          autocomplete="off"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className="alert">{emailError}</p>
        <input
          className="inputPassword"
          type="password"
          placeholder="Password"
          autocomplete="off"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p className="alert">{passwordError}</p>
        <input
          className="inputSubmit"
          type="submit"
          value="Login"
          onClick={handleSubmit}
        />
        <Link to="/Signup">New User ?</Link>
      </form>
    </div>
  );
}

export default Login;
