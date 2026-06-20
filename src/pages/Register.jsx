import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/auth.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      password,
      confirmPassword
    } = formData;

    if (!name.trim()) {
      return setError("Name is required");
    }

    if (!email.trim()) {
      return setError("Email is required");
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return setError(
        "Please enter a valid email"
      );
    }

    if (!password) {
      return setError(
        "Password is required"
      );
    }

    if (password.length < 6) {
      return setError(
        "Password must be at least 6 characters"
      );
    }

    if (password !== confirmPassword) {
      return setError(
        "Passwords do not match"
      );
    }

    try {

      setError("");
      setSuccess("");

      const response =
        await registerUser({
          name,
          email,
          password
        });

      setSuccess(
        response.data.message ||
        "Registration successful"
      );

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Registration failed"
      );

    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Create Account</h2>

        <p className="auth-subtitle">
          Register to manage your tasks
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        {success && (
          <div className="auth-success">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Register
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
