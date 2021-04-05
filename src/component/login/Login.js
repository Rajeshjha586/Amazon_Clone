import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button className="login_signinButton">Sign In</button>
        </form>

        <p>
          <input className="pcheckbox" type="checkbox" />
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>

      <div className="linining">
        <hr className="hr" />
        <p className="newAmazon">New to Amazon</p>
        <hr className="hr" />
      </div>
      <button className="login_registerButton">
        Create Your Amazon Account
      </button>
    </div>
  );
}

export default Login;
