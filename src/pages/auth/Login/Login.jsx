import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useAuth } from "../../../contexts/AuthProvider";
import { useData } from "../../../contexts/DataProvider";

import "./Login.css";

const Login = () => {
  const { loading } = useData();
  const [hidePassword, setHidePassword] = useState(true);
  const { error, loginCredential, setLoginCredential, loginHandler } =
    useAuth();
  const { email, password } = loginCredential;

  return (
    !loading && (
      <div className="login-container">
        <h2>Login</h2>
        <form
          onSubmit={(e) => loginHandler(e, email, password)}
          className="login-body"
        >
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              value={loginCredential.email}
              required
              onChange={(e) =>
                setLoginCredential({
                  ...loginCredential,
                  email: e.target.value,
                })
              }
              id="email"
              placeholder="Email Address"
              type="email"
            />
          </div>

          <div className="password-container">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <input
                value={loginCredential.password}
                required
                onChange={(e) =>
                  setLoginCredential({
                    ...loginCredential,
                    password: e.target.value,
                  })
                }
                id="password"
                placeholder="Password"
                type={hidePassword ? "password" : "text"}
              />{" "}
              {!hidePassword ? (
                <BsEye
                  className="hide-show-password-eye"
                  onClick={() => setHidePassword(!hidePassword)}
                />
              ) : (
                <BsEyeSlash
                  className="hide-show-password-eye"
                  onClick={() => setHidePassword(!hidePassword)}
                />
              )}
            </div>
          </div>

          <div className="remember-me-container">
            <div>
              <input name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Keep me signed in</label>
            </div>
            <p>Forgot your password?</p>
          </div>
          {error && <span className="error">{error}</span>}
          <div className="login-btn-container">
            <input value="Login" type="submit" />
            <button
              onClick={(e) => {
                loginHandler(e, "mertarar.ma@gmail.com", "test123");
              }}
            >
              Login with Test Credentials
            </button>
          </div>
          <Link className="new-account" to="/signup">
            Create a new account?
          </Link>
        </form>
      </div>
    )
  );
};

export default Login;
