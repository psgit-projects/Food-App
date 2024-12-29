import React, { useContext, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../contaxt/StoreContext';
import axios from "axios";

function Login({ setShowLogin }) {
  const { url,setToken } = useContext(StoreContext);
  const [currentStep, setCurrentStep] = useState("Login");
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const onLogin = async (event) => {
    event.preventDefault();

    if (!data.email || !data.password || (currentStep === "Signup" && !data.name)) {
      alert("Please fill in all required fields.");
      return;
    }

    const endpoint = currentStep === "Login" ? "/api/user/login" : "/api/user/register";
    try {
      const response = await axios.post(`${url}${endpoint}`, data);
      if (response.data.success) {
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token)
        alert(response.data.message);
        setShowLogin(false); // Close the popup on success
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="modal-overlay" onClick={() => setShowLogin(false)}>
      <div className="login-popup" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={onLogin} className="login-form">
          <div className="login-header">
            <h2>{currentStep}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt="Close login form"
              className="close-icon"
            />
          </div>
          <div className="login-inputs">
            {currentStep === "Signup" && (
              <input
                name="name"
                value={data.name}
                onChange={onChangeHandler}
                type="text"
                placeholder="Your Name"
                required
              />
            )}
            <input
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit">{currentStep === "Signup" ? "Create Account" : "Login"}</button>
          </div>
          <div className="login-terms">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          <p className="toggle-step">
            {currentStep === "Login" ? (
              <>Create New Account? <span onClick={() => setCurrentStep("Signup")}>Click here</span></>
            ) : (
              <>Already have an account? <span onClick={() => setCurrentStep("Login")}>Login</span></>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
