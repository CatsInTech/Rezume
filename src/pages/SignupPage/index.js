import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Signup() {
  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [confirmPassword,setConfirmPassword] = React.useState("");
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
    } 
    else {
      setPasswordError("");
    }
    if(confirmPassword === "")
    {
      setConfirmPasswordError("No confirm password provided");
    }
    else
    {
      setConfirmPasswordError("");
    }
  }
  return (
    <div className="container">
      <div className="loginform">
        <h1>Sign up</h1>
        <div>
          <input
            className="inputEmail"
            type="email"
            placeholder="Email"
            autocomplete="off"
            onChange={(e)=> setEmail(e.target.value)}
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
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
          <div className="alert">{passwordError}</div>
        </div>
        <div>
          <input
            className="inputPassword"
            type="password"
            placeholder="Confirm Password"
            autocomplete="off"
            onChange ={(e)=> setConfirmPassword(e.target.value)}
            required
          />
          <div className="alert">{confirmPasswordError}</div>
        </div>
        <div className="Submit-form">
          <div>
            <input className="inputSubmit" type="submit" value="Signup" onClick={handleSubmit}/>
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
