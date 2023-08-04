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
        sessionActions.signup({
          email,
          first_name,
          last_name,
          zip_code,
          password,
        })).catch(async (res) => {
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
    e.preventDefault();
    return dispatch(
      sessionActions.login({
        email: "demo@demo.com",
        password: "123456",
      })
    );
  };

  return (
    <div className="signup-page">
      <div className="signup-left-side">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up for Yelp</h2>
          <h3>Connect with great local businesses</h3>
          <p className="terms">
            By continuing, you agree to Yelp's <a href="#">Terms of Service</a>{" "}
            and <br></br>acknowledge Yelp's <a href="#">Privacy Policy</a>.
          </p>
          <label>
            <input
              required
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            ></input>
          </label>

          <label>
            <input
              required
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            ></input>
          </label>

          <label>
            <input
              required
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
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            ></input>
          </label>
          <label>
            <input
              required
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          <button type="submit">Sign Up</button>
          <button type="button" onClick={handleDemoUser}>
            Demo User
          </button>
          <p className="already-yelp">
            Already on Yelp? <a href="/login">Log in</a>
          </p>
        <ul>
                  {errors.map((error, i) => {
                    return <li key={i} className="review-error"><span><i class="fa-solid fa-circle-exclamation"></i></span> {error}</li>;
                  })}
                </ul>
        </form>
      </div>
      <div className="signup-right-side">
        <div className="yelp-img">
          <img
            className="yelp-image-sign"
            src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
