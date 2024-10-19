import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../services/authService";

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const register = async () => {
    try {
      const token = await registerUser(username, password, password2);
      console.log(token);
      localStorage.setItem("token", token.accessToken);
    } catch(error) {
        alert(error)
    }
  };

  return (
    <div className="form-container">
      <section className="register-page">
        <h2>Register</h2>
        <form action="index.html">
          <div className="form-group">
            <label htmlFor="reg-username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="reg-username"
              placeholder="Choose a username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="reg-password"
              placeholder="Choose a password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeat-password">Repeat Password</label>
            <input
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              type="password"
              id="repeat-password"
              placeholder="Repeat your password"
            />
          </div>
          <button type="button" className="submit-btn" onClick={register}>
            Register
          </button>
        </form>
        <p className="form-footer">
          Already have an account?{" "}
          <Link to="/login" className="switch-link">
            Login here
          </Link>
        </p>
      </section>
    </div>
  );
};
