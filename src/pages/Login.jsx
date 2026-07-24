import { Link } from "react-router-dom";
import "../styles/Login.css";
import qrCode from "../assets/qr-code.png";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">

        {/* Left Side - Login Form */}
        <div className="login-card">
          <h1>Welcome back!</h1>

          <p className="subtitle">
            We're so excited to see you again!
          </p>

          <label>EMAIL OR PHONE NUMBER <span className="required">*</span></label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>PASSWORD <span className="required">*</span></label>

          <input
            type="password"
            placeholder="Enter your password"
          />

          <p className="forgot-password">
            Forgot your password?
          </p>

          <button>Log In</button>


           <GoogleLogin
    onSuccess={async (credentialResponse) => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/google",
          {
            credential: credentialResponse.credential,
          }
        );

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }}
    onError={() => {
      console.log("Login Failed");
    }}
  />

          <p className="register-link">
            Need an account?{" "}
            <Link to="/signup">Register</Link>
          </p>
        </div>

        {/* Right Side - QR Code */}
        <div className="qr-section">
          <img src={qrCode} alt="QR Code" />

          <h2>Log in with QR Code</h2>

          <p>
            Scan this with the <strong>Discord mobile app</strong>
            <br />
            to log in instantly.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Login;