import React from "react";
import "./Signin.css";

function Signin() {
  return (
    <div className="container">
      <h1>Signin</h1>
      <form>
        <div className="col-1">
          <label htmlFor="userid">UserId:</label>
          <input type="text" name="userid" id="userid" />
        </div>
        <div className="col-1">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="col-2">
          <button type="submit">Log in</button>
        </div>
      </form>
      <div className="col-3">
        <a href="Forgetpass.js">Forgot Passwort</a>
        <br />
        <a href="Signup.js">Create Account</a>
      </div>
    </div>
  );
}

export default Signin;
