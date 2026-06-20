import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const ResetPassword = () => {

  const navigate =
    useNavigate();

  const [token, setToken] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setError("");
        setMessage("");

        const response =
          await axios.post(
            "http://localhost:5000/api/auth/reset-password",
            {
              token,
              password
            }
          );

        setMessage(
          response.data.message
        );

        setTimeout(() => {
          navigate("/login");
        }, 2000);

      } catch (err) {

        setError(
          err.response?.data?.message ||
          "Something went wrong"
        );

      }

    };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>
          Reset Password
        </h2>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        {message && (
          <div className="auth-success">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Reset Token"
            value={token}
            onChange={(e) =>
              setToken(
                e.target.value
              )
            }
          />

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );

};

export default ResetPassword;
