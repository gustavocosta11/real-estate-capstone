import "./Signin.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../redux/authSlice";
import { request } from "../../util/fetchAPI";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const options = {
        "Content-Type": "application/json",
      };

      const data = await request("/auth/login", "POST", options, {
        email,
        password,
      });

      dispatch(login(data));
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <h2>Sign in</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
