import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
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
    console.log(email, passwprd);
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

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-2/4">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the Captcha in field"
                className="input input-bordered"
                required
              />
              <button
                onClick={handleCaptchaValidation}
                className="btn btn-xs btn-outline mt-3	"
              >
                validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
