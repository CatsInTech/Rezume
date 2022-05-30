import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  function handleSubmit() {
    if (email === "") {
      setEmailError("Required");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("No password provided");
    } else {
      setPasswordError("");
    }
    if (confirmPassword === "") {
      setConfirmPasswordError("No confirm password provided");
    } else {
      setConfirmPasswordError("");
    }
  }
  return (
    <div className="container">
      <form className="loginform">
        <h1>Sign up</h1>
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
          className="inputPassword"
          type="password"
          placeholder="Confirm Password"
          autocomplete="off"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <p className="alert">{confirmPasswordError}</p>
        <input
          className="inputSubmit"
          type="submit"
          value="Signup"
          onClick={handleSubmit}
        />
        <Link to="/login"> Already Registered?</Link>
      </form>
    </div>
  );
}

export default Signup;
