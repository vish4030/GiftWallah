import React, { useState } from 'react';
import Input from '../components/Input'; 

const SignUp = () => {
  const [userData, setUserData] = useState({ fname: '', email: '', mobile: '', password: '', cpassword: ''});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /\S+@\S+\.\S+/;

    if (!userData.fname.trim()) {
      newErrors.fname = 'Name is required';
    }

    if (!userData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(userData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!userData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (userData.mobile.length < 10) {
      newErrors.mobile = 'Mobile number must be at least 10 digits';
    }

    if (!userData.password) {
      newErrors.password = 'Password is required';
    } else if (userData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (userData.cpassword !== userData.password) {
      newErrors.cpassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call or form submission
      setTimeout(() => {
        alert('Registration Successful!');
        setIsSubmitting(false);
        // Reset form fields
        setUserData({ fname: '', email: '', mobile: '', password: '', cpassword: '' });
        setErrors({});
      }, 1000);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="signup-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fname">Name:</label>
              <Input type="text" name="fname" value={userData.fname} handleChange={handleChange} />
              {errors.fname && <span className="error">{errors.fname}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Input type="email" name="email" value={userData.email} handleChange={handleChange} />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile:</label>
              <Input type="number" name="mobile" value={userData.mobile} handleChange={handleChange} />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Input type="password" name="password" value={userData.password} handleChange={handleChange} />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password:</label>
              <Input type="password" name="cpassword" value={userData.cpassword} handleChange={handleChange} />
              {errors.cpassword && <span className="error">{errors.cpassword}</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !userData.fname || !userData.email || !userData.mobile || !userData.password || !userData.cpassword}
              className="signup-button btn"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
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

export default SignUp;
