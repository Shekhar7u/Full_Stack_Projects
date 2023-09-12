import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you are agree to Amazon`s Terms of conditions for use &
          Sale. Please see our Privacy Policy, Our Cookies notices, and our
          Interest-Based Ads
        </p>
        <button onClick={register} className="login_registerButton">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
