import React from 'react'
import "../CSS/Loginsignup.css"

const Loginsignup = () => {
  return (
   <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text"  placeholder='Your Name'/>
        <input type="text"  placeholder='Email Address'/>
        <input type="text"  placeholder='Password'/>
        <button>Continue</button>
        <div>
          
          <p className="loginsignup-login">
            Already have an account ? <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing,i agree  to terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Loginsignup