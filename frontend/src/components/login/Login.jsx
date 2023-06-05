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

  const handleSubmit = (event) => {
    event.preventDefault();

    // setCredential("");
    // setPassword("");

    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      async (res) => {
        let data;
        try {
          data = await res.clone().json;
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );  
    //Api ile bağlantı kuracak olan servisi buraya yazabilirsin.
    // console.log(`Username:${username}, Password:${password}`);
  };

  const handleDemoUser = (e) => {
    e.preventDefault()
    return dispatch(sessionActions.login({
      email: "merve@merve.com",
      password: '123456'
    }))
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <h2>Log in to Yelp</h2>
        <p className="new-yelp">New to Yelp? <NavLink to ="/signup">Sign Up</NavLink></p>
        <p className="terms">By continuing, you agree to Yelp`s Terms of Service and acknowledge Yelp`s Privacy Policy.</p>
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
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default LoginForm;
