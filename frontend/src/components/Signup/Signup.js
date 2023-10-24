import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const details = { name, phoneNumber, address, gender, dob, userId, password };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Submitted:", details);
  };
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
        </div>
        <div className="form-group">
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Date of Birth"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="User ID"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
