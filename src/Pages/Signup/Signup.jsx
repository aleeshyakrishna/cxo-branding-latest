import React,{useEffect} from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Signup.module.css"
import logo from "../../Components/Navbar/NavbarImages/logo.png"

const Signup = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  const navigate = useNavigate();

  return (
    <div className={styles.signup_main}>
      <div className={styles.signup_top}>
        <img
          src={logo}
          onClick={() => navigate("/")}
          alt="Logo"
        />
      </div>
      
      <div className={styles.signup_form}>
        <form>
          <div className={styles.inside_signup_form}>
            <div className={styles.form_input_a}>
              <label>
                User Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
              />
              <label>
                Email<span>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
              />
              <label>
                Mobile Number<span>*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
            <div className={styles.form_input_b}>
              <label>
                Password<span>*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
              <label>
                Confirm Password<span>*</span>
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className={styles.signup_aggry_form}>
            <button type="submit">Signup</button>
          </div>
        </form>
        <div className={styles.other_signup}>
          <p>
            Already have an Account?{" "}
            <NavLink to="/user/login">
              <span>Log in</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
