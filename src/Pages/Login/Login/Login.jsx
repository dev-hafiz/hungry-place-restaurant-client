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
  const { signInWithGoogle } = useAuth();
  //react hooks
  const navigate = useNavigate();
  const location = useLocation();

  //Button Disable State
  const [disable, setDisable] = useState(true);
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
    const passwprd = form.password.value;
    // console.log(email, passwprd);
  };

  //Captcha Validation Handler
  const handleCaptchaValidation = () => {
    const user_type_captcha = captchaRef.current.value;

    if (validateCaptcha(user_type_captcha)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  //Google Login Handler
  const googleLoginHandler = () => {
    // console.log("Button Is Clicked");
    signInWithGoogle(location, navigate);
  };
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center ml-6  lg:w-2/4">
          <div className="login-container">
            <img src={loginImg} alt="login image" />
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
                    onBlur={handleCaptchaValidation}
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
