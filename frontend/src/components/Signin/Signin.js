import React from "react";
import "./Signin.css";

function Signin() {
  return (
    <div className="login-form">
      <h2>Sign In</h2>
      <form>
        <div className="input-container">
          <input type="text" placeholder="User ID" />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit" className="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
