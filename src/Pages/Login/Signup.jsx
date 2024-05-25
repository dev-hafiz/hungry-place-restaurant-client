import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/LoginImg.png";
import googleBtn from "../../assets/google.png";

import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { signInWithGoogle, registerWithEmailAndPassword } = useAuth();
  //react hooks
  const navigate = useNavigate();
  const location = useLocation();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password, name, photoUrl, location, navigate);

    registerWithEmailAndPassword(
      email,
      password,
      name,
      photoUrl,
      location,
      navigate
    );
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
          <h3 className="login-title">WELCOME BACK!</h3>
          <p className="login-sub-title">
            Already have an account?{" "}
            <span className="toggle-text">
              <Link to="/login">Login</Link>
            </span>
          </p>
          <div>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label className="label">
                  <span className="lebel-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input-box"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="lebel-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Photo URL"
                  className="input-box"
                  required
                />
              </div>
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
              <div>
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

              <input className="submit-btn" type="submit" value="Register" />
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

export default Signup;
