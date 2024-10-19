import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../services/authService";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const token = await loginUser(username, password);
      console.log(token);
      localStorage.setItem("token", token.accessToken);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="form-container">
      <section className="login-page">
        <h2>Login</h2>
        <form action="/index">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="button" className="submit-btn" onClick={login}>
            Login
          </button>
        </form>
        <p className="form-footer">
          Don't have an account?{" "}
          <Link to="/register" className="switch-link">
            Register here
          </Link>
        </p>
      </section>
    </div>
  );
};
