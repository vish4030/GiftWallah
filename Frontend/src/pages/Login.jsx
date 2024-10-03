import React, { useState } from 'react';
import Input from '../components/Input';

import "./Style.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate login logic, like an API call
      setTimeout(() => {
        alert('Login Successful!');
        setIsSubmitting(false);
        setEmail("");
        setPassword("");
      }, 1000);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="login-form">
            <div className="header">
              <h2>Welcome</h2>
              <p>Please log in to continue.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  handleChange={handleChange}
                />
                {errors.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  handleChange={handleChange}
                />
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <div className="form-group">
                <Input type="checkbox" />
                <span>Remember me</span>
                <span className="forgot-password">Forgot Password?</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !email || !password}
                className="btn login-button"
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
        <div className="col-6">
          <div className="img"><h3>Img should be here.</h3></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
