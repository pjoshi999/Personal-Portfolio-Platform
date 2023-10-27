import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <>
    <div className="container">
        <h1>SignUp</h1>
      <form>
        <div className="col-1">
          <label htmlFor="name">Enter Full Name:</label>
          <input type="text" id='name'/>
        </div>
        <div className="col-1">
          <label htmlFor="email">Enter Email id:</label>
          <input type="email" id='email'/>
        </div>
        <div className="col-1">
          <label htmlFor="mobile">Enter Mobile No:</label>
          <input type="text" id='mobile'/>
        </div>
        <div className="col-1">
        <label htmlFor="gender">Gender:</label>
            <input type="radio" id="gender" name="gender" value="Male" /> Male
            <input type="radio" id="gender" name="gender" value="Female" /> Female
            <input type="radio" id="gender" name="gender" value="Other" /> Other
        </div>
        <div className="col-1">
          <label htmlFor="dateofbirth">Enter Date of Birth:</label>
          <input type="date" id='dateofbirth'/>
        </div>
        <div className="col-1">
          <label htmlFor="address">Address:</label>
          <input type="text" id='address'/>
        </div>
        <div className="col-1">
          <label htmlFor="userid">Create UserId:</label>
          <input type="text" name="userid" id="userid" />
        </div>
        <div className="col-1">
          <label htmlFor="password">Enter Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="col-1">
          <label htmlFor="cpassword">Confirm Password:</label>
          <input type="password" name="cpassword" id="cpassword" />
        </div>
        <div className="col-2">
            <button type='submit'>Create Account</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Signup