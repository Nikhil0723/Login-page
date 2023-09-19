import React from 'react'
import './Auth.css'
import { BiLogoFacebookCircle , BiLogoGoogle , BiLogoLinkedin } from 'react-icons/bi';
import Login from '../login/Login'
import SignUp from '../signup/SignUp';

const Auth = () => {
  return (
    <div className='auth-container'>
      <div className='auth-left'>
      <div className='left-container'>
      <div className='logo'>
        <h1>LOGO</h1>
      </div>
      <div className='auth-head'>
        <h1 className='head-light'>Welcome to</h1>
        <h1 className='head-bold'>Proxima</h1>
        <p className='title'>
          The only tool you'll ever need
        </p>
      </div>
      <div className='auth-buttons'>
        <span></span>
        <p>Login ,  Register or sign in with</p>
        <div className='btn-container'>
          <button><BiLogoFacebookCircle/></button>
          <button><BiLogoGoogle/></button>
          <button><BiLogoLinkedin/></button>
        </div>
      </div>
      </div>
      </div>
      <div className='auth-right'>
       <SignUp/>
      </div>

    </div>
  )
}

export default Auth
