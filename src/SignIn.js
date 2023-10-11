// SignInPage.js
import React, { Component } from "react";
import "./SignIn.css"; // Import your CSS file
import Nav from "./Nav";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrPhone: "",
      password: "",
      rememberMe: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({ [name]: val });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    console.log("Sign-in data:", this.state);
  };

  render() {
    return (
      <div className="sign-in-container">
        <Nav />
        <div className="sign-in-form">
          <h2>Sign In</h2>
          <div onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label>Email or phone number</label>
              <input
                type="text"
                name="emailOrPhone"
                value={this.state.emailOrPhone}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </div>

            <button className="sign-in-button" type="submit">
              Sign In
            </button>
          </div>
          <div className="row_div">
            <div className="input-group remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={this.state.rememberMe}
                onChange={this.handleInputChange}
              />
              <div>Remember me</div>
              <p>Need help?</p>
            </div>
          </div>
          <div className="sign-up-section">
            <p>New to Netflix? Sign up now.</p>
          </div>
          <div className="recaptcha-info">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInPage;
