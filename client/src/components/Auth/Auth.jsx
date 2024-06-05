import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "react-loader-spinner";
import url from '../../assets/breathe_esg_logo-removebg-preview.png';

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/auth/signup", userInfo);

      toast(response.data.message);

      setTimeout(() => {
        setLoading(false);
        setIsLoggedIn(true);
      }, 6000);
    } catch (err) {
      console.log(err);
      toast(err.response.data.error);
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", userInfo);
      toast(response.data.message);
      setTimeout(() => {
        Navigate("home");
      }, 6000);
    } catch (err) {
      console.log(err);
      toast(err.response.data.error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo({
      password: "",
      email: "",
      confirmedPassword: "",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-description">
        <div className="text1">Welcome to</div>
        <div className="brand-box">
          <img className="logo" src={url} alt="breathe-esg-logo" />
          <div className="text2">BREATHE ESG</div>
        </div>
        <div className="text3">
          We help you track your organisations metrics as per the ESG Guidelines
        </div>
        <div className="text4">
          Sounds Interesting? <span className="subtext4">Get in touch!</span>
        </div>
      </div>
      {isLoggedIn ? (
        <div className="auth-page">
          <div></div>
          <div className="auth-body">
            <div className="auth-text">
              <span className="auth-text-head">Login</span>
            </div>
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="auth-form-item">
                <span className="auth-input-icon">
                  <MdOutlineEmail />
                </span>
                <input
                  className="auth-input-control"
                  type="email"
                  name="email"
                  placeholder="Email-Id"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="auth-form-item">
                <span className="auth-input-icon">
                  <RiLockPasswordLine />
                </span>
                <input
                  className="auth-input-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className="auth-form-button"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <ProgressBar
                    height="40"
                    width="40"
                    color="rgb(251, 109, 251)"
                    ariaLabel="progress-bar-loading"
                  />
                ) : (
                  "Login"
                )}
              </button>
              <span className="auth-alternative-text or">or</span>
              <span
                className="auth-alternative-text url"
                onClick={() => setIsLoggedIn(false)}
              >
                New User ?
              </span>
            </form>
          </div>
        </div>
      ) : (
        <div className="auth-page">
          <div className="auth-page-img"></div>
          <div className="auth-body">
            <div className="auth-text">
              <span className="auth-text-head">Sign Up</span>
            </div>
            <form className="auth-form" onSubmit={handleSignup}>
              <div className="auth-form-item">
                <span className="auth-input-icon">
                  Email<span className="required">*</span>
                </span>
                <input
                  className="auth-input-control"
                  type="email"
                  name="email"
                  placeholder="Your Email Id"
                  value={userInfo.email}
                  onChange={handleChange}
                />
              </div>
              <div className="auth-form-item">
                <span className="auth-input-icon">
                  Password <span className="required">*</span>
                </span>
                <input
                  className="auth-input-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userInfo.password}
                  onChange={handleChange}
                />
              </div>
              <div className="auth-form-item">
                <span className="auth-input-icon">
                  Confirmed Password <span className="required">*</span>
                </span>
                <input
                  className="auth-input-control"
                  type="password"
                  name="confirmedPassword"
                  placeholder="Password"
                  value={userInfo.confirmedPassword}
                  onChange={handleChange}
                />
              </div>
              <button
                className="auth-form-button"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <ProgressBar
                    height="40"
                    width="40"
                    color="rgb(251, 109, 251)"
                    ariaLabel="progress-bar-loading"
                  />
                ) : (
                  "Continue"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Auth;
