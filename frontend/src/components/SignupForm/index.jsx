import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import "./signup.css";

const SignupForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      
      return dispatch(
        sessionActions.signup({ email, first_name, last_name, zip_code, password })
      ).catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
        
      });
      
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  const handleDemoUser = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({
      email: "demo@mdemo.com",
      password: '123456'
    }))
  }


  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up for Yelp</h2>
        <h3>Connect with great local businesses</h3>
        <p>By continuing, you agree to Yelp`s Terms of Service and acknowledge Yelp`s Privacy Policy.</p>
        <label>
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          ></input>
        </label>
        <label>
          
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          ></input>
        </label>
        <label>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
        </label>
        <label>
        
          <input
            type="text"
            value={zip_code}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="Zip Code"
          ></input>
        </label>
        <label>
    
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
        </label>
        <label>
         
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
        <button type="button" onClick={handleDemoUser}>Demo User </button>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default SignupForm;
