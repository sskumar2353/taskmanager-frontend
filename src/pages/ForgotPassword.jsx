import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";

const ForgotPassword = () => {

  const [email, setEmail] =
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
            "http://localhost:5000/api/auth/forgot-password",
            { email }
          );

        setMessage(
          `Reset Token: ${response.data.resetToken}`
        );

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
          Forgot Password
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
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Generate Reset Token
          </button>

        </form>

      </div>
    </div>
  );

};

export default ForgotPassword;