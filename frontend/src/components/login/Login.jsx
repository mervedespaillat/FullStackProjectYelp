import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setErrors([]);
  
    try {
      await dispatch(sessionActions.login({ email, password }));
    } catch (res) {
      let data;
      try {
        data = await res.clone().json();
      } catch {
        data = await res.text();
      }
      if (data?.errors) {
        setErrors(data.errors);
      } else if (data) {
        setErrors([data]);
      } else {
        setErrors([res.statusText]);
      }
    }
  };

  const handleDemoUser = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({
      email: "demo@demo.com",
      password: '123456'
    }))
  }

  return (
    <div className="login-page">
      <div className="login-left-side">
      <form onSubmit={handleSubmit}>
        <h2>Log in to Melt</h2>
        <p className="new-yelp">New to Melt? <NavLink to ="/signup">Sign Up</NavLink></p>
        <p className="terms">
            By continuing, you agree to Melt's <a href="#">Terms of Service</a>{" "}
            and <br></br>acknowledge Melt's <a href="#">Privacy Policy</a>.
          </p>
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
        </label>
        <button type="submit">Login</button>
        <button type="button" onClick={handleDemoUser}>Demo User</button>
        <ul>
                  {errors.map((error, i) => {
                    return <li key={i} className="review-error"><span><i class="fa-solid fa-circle-exclamation"></i></span> {error}</li>;
                  })}
                </ul>
      </form>
      </div>
      <div className="login-right-side">
      <img className="yelp-image-sign" src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png" alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
