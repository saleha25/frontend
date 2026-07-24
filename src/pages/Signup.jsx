import "../styles/Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">

        <h1>Create an account</h1>

        <label>USERNAME</label>
        <input
          type="text"
          placeholder="Enter your username"
        />

        <label>EMAIL</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>PASSWORD</label>
        <input
          type="password"
          placeholder="Enter your password"
        />

        <button>Create Account</button>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">Log In</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;