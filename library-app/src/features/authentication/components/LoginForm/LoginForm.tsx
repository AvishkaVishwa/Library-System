import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/ReduxStore';
import { loginuser } from '../../../../redux/Slices/AuthenticationSlices';

import './LoginForm.css';


export const LoginForm: React.FC = () => {

  
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const auth = useSelector((state: RootState) => state.authentication);
    const dispatch : AppDispatch = useDispatch();

    const handleLoginUser = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if(emailRef && emailRef.current && passwordRef && passwordRef.current){
        dispatch(loginuser({
          email: emailRef.current.value,
          password: passwordRef.current.value
        }))
      }
    };
  
    return (
      <form className="login-form">
        <h2>Please Login</h2>
        {auth.error ? <p className="login-form-error">Username or password incorrect</p> : <></>}
        <div className="login-form-input-group">
          <h5>Email</h5>
          <input
            className="login-form-input"
            placeholder="email"
            name="email"
            required
            ref={emailRef}
          />
        </div>
        <div className="login-form-input-group">
          <h5>Password</h5>
          <input
            className="login-form-input"
            placeholder="password"
            name="password"
            type="password"
            required
            ref={passwordRef}
          />
        </div>
        <button className="login-form-submit" onClick={handleLoginUser}>
          Login
        </button>
        <p>
          Don't have an account?{' '}
          <span className="login-form-register">Create one here.</span>
        </p>
      </form>
    );
  };
  
