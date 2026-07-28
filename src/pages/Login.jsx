import { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import qrCode from "../assets/qr-code.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    // Save JWT token
    localStorage.setItem("token", response.data.token);

    // Save logged-in user
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    alert(response.data.message);

    // Clear form
    setEmail("");
    setPassword("");

    // We'll redirect later
    // navigate("/");

  } catch (error) {
    alert(error.response?.data?.message || "Login failed.");
  }
};

  return (
    <div className="min-h-screen bg-[#313338] flex items-center justify-center p-5">
      <div className="bg-[#2b2d31] rounded-lg shadow-2xl p-10 flex flex-col lg:flex-row gap-12">

        {/* Left Section */}
        <div className="w-full lg:w-[420px]">

          <h1 className="text-white text-3xl font-bold text-center">
            Welcome back!
          </h1>

          <p className="text-[#b5bac1] text-center mt-2 mb-8">
            We're so excited to see you again!
          </p>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <label className="block text-xs font-bold text-[#b5bac1] mb-2">
              EMAIL OR PHONE NUMBER
              <span className="text-red-500"> *</span>
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1e1f22] text-white rounded-md px-4 py-3.5 border border-transparent focus:border-[#5865f2] outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <label className="block text-xs font-bold text-[#b5bac1] mt-6 mb-2">
              PASSWORD
              <span className="text-red-500"> *</span>
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-[#1e1f22] text-white rounded-md px-4 py-3.5 border border-transparent focus:border-[#5865f2] outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <p className="text-[#00a8fc] text-sm mt-3 cursor-pointer hover:underline">
              Forgot your password?
            </p>

            <button
              type="submit"
              className="w-full mt-5 bg-[#5865f2] hover:bg-[#4752c4] transition-all duration-200 text-white font-semibold py-3 rounded-md"
            >
              Log In
            </button>

          </form>

          {/* Divider */}

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>

            <span className="mx-3 text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          {/* Google Login */}

          <div className="flex justify-center">
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
          </div>

          <p className="text-[#b5bac1] text-sm mt-8">
            Need an account?{" "}
            <Link
              to="/signup"
              className="text-[#00a8fc] hover:underline"
            >
              Register
            </Link>
          </p>

        </div>

        {/* QR Section */}

        <div className="hidden lg:flex flex-col items-center justify-start text-center w-[240px]">

          <img
            src={qrCode}
            alt="QR Code"
            className="w-[180px] bg-white rounded-lg p-2"
          />

          <h2 className="text-white text-3xl font-bold mt-6">
            Log in with QR Code
          </h2>

          <p className="text-[#b5bac1] mt-4 leading-7 text-base">
            Scan this with the{" "}
            <strong className="text-white">
              Discord mobile app
            </strong>
            <br />
            to log in instantly.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Login;