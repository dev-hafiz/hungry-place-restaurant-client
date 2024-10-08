import { useEffect, useRef, useState } from "react";
import "./Login.css";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/LoginImg.png";
import googleBtn from "../../../assets/google.png";

const Login = () => {
  const { signInWithGoogle, logInWithEmailPassword } = useAuth();
  //react hooks
  const navigate = useNavigate();
  const location = useLocation();

  //UseRef for Captcha
  const captchaRef = useRef(null);

  //Captcha load inside useEffect
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logInWithEmailPassword(email, password, location, navigate);
  };

  const googleLoginHandler = () => {
    // console.log("Button Is Clicked");
    signInWithGoogle(location, navigate);
  };
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center ml-6  lg:w-2/4">
          <div className="login-container">
            <div className="image-container">
              <img
                src={loginImg}
                className="image animated"
                alt="login image"
              />
            </div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        </div>

        <div className="card shrink-0 w-full max-w-sm ">
          <h3 className="login-title mt-3">WELCOME BACK!</h3>
          <p className="login-sub-title">
            Don’t have an account?{" "}
            <span className="toggle-text">
              <Link to="/register">Register</Link>
            </span>
          </p>
          <div>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label className="label">
                  <span className="lebel-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="input-box"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="label">
                  <span className="lebel-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  className="input-box"
                  required
                />
              </div>
              <div>
                <label className="label mt-3 block">
                  <span className="lebel-text ">
                    <LoadCanvasTemplate />
                  </span>

                  <input
                    type="text"
                    ref={captchaRef}
                    name="captcha"
                    placeholder="Type the Captcha"
                    className="captcha-input mt-2 "
                    required
                  />
                </label>
              </div>
              <input className="submit-btn" type="submit" value="Login" />
            </form>
          </div>
          <div className="text-center">
            <p className="line-design ">or continue with</p>
          </div>

          <div>
            <button onClick={googleLoginHandler} className="social-btn">
              <img src={googleBtn} alt="google login button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
