import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import "./sign.css";

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
    // <div className="signup-page">
    //   <form onSubmit={handleSubmit}>
    //    
    //     <label>
    //       <input
    //         type="text"
    //         value={first_name}
    //         onChange={(e) => setFirstName(e.target.value)}
    //         placeholder="First Name"
    //       ></input>
    //     </label>
    //     <label>
          
    //       <input
    //         type="text"
    //         value={last_name}
    //         onChange={(e) => setLastName(e.target.value)}
    //         placeholder="Last Name"
    //       ></input>
    //     </label>
    //     <label>

    //       <input
    //         type="text"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Email"
    //       ></input>
    //     </label>
    //     <label>
        
    //       <input
    //         type="text"
    //         value={zip_code}
    //         onChange={(e) => setZipCode(e.target.value)}
    //         placeholder="Zip Code"
    //       ></input>
    //     </label>
    //     <label>
    
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Password"
    //       ></input>
    //     </label>
    //     <label>
         
    //       <input
    //         type="password"
    //         placeholder="Confirm Password"
    //         value={confirmPassword}
    //         onChange={(e) => setConfirmPassword(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <button type="submit">Sign Up</button>
    //     <button type="button" onClick={handleDemoUser}>Demo User </button>
    //     <ul>
    //       {errors.map((error) => (
    //         <li key={error}>{error}</li>
    //       ))}
    //     </ul>
    //   </form>
    // </div>

    <div className="whole-page">
      <div className="splitPage left-page-sign">
        <div className="two-header">
           <h2>Sign Up for Yelp</h2>
           <h3>Connect with great local businesses</h3>
           <p>By continuing, you agree to Yelp's <a href="#">Terms of Service</a>  and <br></br>acknowledge Yelp's <a href="#">Privacy Policy</a>.</p>
        </div>
        <div className="btn-container">
          <button className="btn-one"><i class="fa-brands fa-facebook"></i> Continue with Facebook</button>
          <button className="btn-two">Google <i class="fa-brands fa-google"></i></button>
          <button className="btn-three"><i class="fa-brands fa-apple"></i> Continue with Apple</button>
        </div>
        <div className="dont-worry">
          <p>Don't worry, we never post without your permission.</p> </div>
        <div className="or">
         <div> <p>---------------------- </p><hr></hr></div> 
          <div className="orText"> OR </div>
          <div><p> ----------------------</p><hr></hr></div>
        </div>
        <div className="form-container-sign">
        <form onSubmit={handleSubmit}>
          <div className="name-credentials">
          <div className="fname-box"><label>
        <input
        required
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          ></input>
        </label></div>
          <div className="lname-box">
             <label>
          
          <input
          required
                  type="text"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                ></input>
              </label>
          </div>
          </div>
          <div className="mail">
            <label>
          <input
          required
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
        </label>
          </div>
          <div className="zip-c"> <label>
        
            <input
                type="text"
                value={zip_code}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Zip Code"
              ></input>
            </label></div>
          <div className="psswrd">
            <label>
            <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
        </label></div>
          <div className="psswrd-confirm">
          <label>
         
            <input
            required
                 type="password"
                 placeholder="Confirm Password"
                 value={confirmPassword}
                 onChange={(e) => setConfirmPassword(e.target.value)}
               />
             </label>
          </div>
        <div className="sign-btn"> <button type="submit">Sign Up</button></div>
          </form>
        <div className="demo-sign">    <button type="button" onClick={handleDemoUser}>Demo User </button></div>
        </div>
        <div className="already-yelp">
          <p>Already on Yelp? <a href="/login">Log in</a></p>
        </div>
      </div>
      <div className="splitPage right-side-sign">
        <div className="yelp-img">

        <img className="yelp-image-sign" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
