import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='auth-login'>
      <div className="login-head">
        <h1>Login</h1>
        <p>Don't have an account yet? <a href="">Create it here</a></p>
      </div>
      <div className="login-form">
        <div className='input-container'>
          <label htmlFor="">USERNAME</label>
          <input type="text" placeholder='Username' />
        </div>
        <div className='input-container'>
          <label htmlFor="">PASSWORD</label>
          <input type="text" placeholder='Password' />
        </div>
      </div>
      <div className="login-footer">
      <a href="">Forgot your password?</a>
      <button>Login &rarr;</button>
      </div>
    </div>
  )
}

export default Login
