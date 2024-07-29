import React, { useState,useEffect } from 'react';
import styles from "./Login.module.css";
// import logo from "../../Components/Navbar/NavbarImages/logo.png";
import logo from "./Images/newlogo.png"
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.username)) {
      newErrors.username = "Username is invalid";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Login Form submitted :", formData);
      // Add your form submission logic here
      // navigate("/");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.signup_main}>
      <div className={styles.signin_top}>
        <img
          src={logo}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        //   alt="Logo"
        />
      </div>
      <div className={styles.signup_form}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inside_signup_form}>
            <div className={styles.form_input_a}>
              <label>
                Username<span>*</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? styles.error_input : ""}
              />
              {errors.username && (
                <div className={styles.error_message}>{errors.username}</div>
              )}
            </div>
            <div className={styles.form_input_b}>
              <label>
                Password<span>*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? styles.error_input : ""}
              />
              {errors.password && (
                <div className={styles.error_message}>{errors.password}</div>
              )}
              {/* <NavLink to="/Recoverpassword">
                <p>Forgot Password...</p>
              </NavLink> */}
            </div>
          </div>
          <br /><br />
          <div className={styles.signup_aggry_form}>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className={styles.other_signup}>
          <p>
            Don't have an account?{" "}
            <NavLink to="/user/register">
              <span style={{ color: "black" }}>Sign up</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
