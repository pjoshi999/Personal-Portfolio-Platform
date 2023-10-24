import React, { useState } from "react";
import "./Forgetpass.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here (e.g., send a password reset email)
  };
  return (
    <div className="forget-password-container">
      <div className="forget-password-form">
        <h2>Forget Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.email)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
