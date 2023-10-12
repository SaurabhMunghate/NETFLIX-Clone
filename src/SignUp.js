// SignInPage.js
import React, { Component } from "react";
import "./SignUp.css"; // Import your CSS file
import Nav from "./Nav";

class SignUp extends Component {
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
      <div>
        {/* <Nav /> */}

        <div className="text_data  sign-up-container">
          <h3>Welcome back!</h3>

          <h1>
            The biggest Indian hits. The best Indian stories. All streaming
            here.
          </h1>
          <div>Watch anywhere. Cancel anytime.</div>
          <div className="signup_button">
            <button>Finish Sign Up</button>
          </div>
        </div>

        <div className="Box">
          <div>
            <div className="box_head_name">Enjoy on your TV</div>
            <div className="box_detail_name">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>

          <div>
            <div>BOX Image</div>
          </div>
        </div>
        <div className="Box">Image2</div>
        <div className="Box">Image3</div>
        <div className="Box">Image4</div>
      </div>
    );
  }
}

export default SignUp;
