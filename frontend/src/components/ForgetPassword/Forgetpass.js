import React from 'react'
import "./Forgetpass.css"

const Forgetpass = () => {
  return (
    <>
    <div className="container">
        <h1>Forget Password</h1>
      <form>
        <div className="col-1">
          <label htmlFor="userid">Enter UserId:</label>
          <input type="text" name="userid" id="userid" />
        </div>
        <div className="col-1">
          <label htmlFor="password">Enter New Password:</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="col-1">
          <label htmlFor="cpassword">Confirm New Password:</label>
          <input type="password" name="cpassword" id="cpassword" />
        </div>
        <div className="col-2">
            <button type='submit'>Save Password</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Forgetpass