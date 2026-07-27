import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    console.log({
      username,
      email,
      password,
    });

    // TODO:
    // Connect to your backend signup API
  };

  return (
    <div className="min-h-screen bg-[#313338] flex items-center justify-center p-5">
      <div className="bg-[#2b2d31] rounded-lg shadow-2xl p-10 w-full max-w-[500px]">

        <h1 className="text-white text-3xl font-bold text-center">
          Create an account
        </h1>

        <p className="text-[#b5bac1] text-center mt-2 mb-8">
          Join the Discord community today.
        </p>

        <form onSubmit={handleSignup}>

          {/* Username */}
          <label className="block text-xs font-bold text-[#b5bac1] mb-2">
            USERNAME
          </label>

          <input
            type="text"
            placeholder="Enter your username"
            className="w-full bg-[#1e1f22] text-white rounded-md px-4 py-3.5 border border-transparent focus:border-[#5865f2] outline-none transition"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          {/* Email */}
          <label className="block text-xs font-bold text-[#b5bac1] mt-6 mb-2">
            EMAIL
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

          <button
            type="submit"
            className="w-full mt-8 bg-[#5865f2] hover:bg-[#4752c4] transition-all duration-200 text-white font-semibold py-3 rounded-md"
          >
            Create Account
          </button>

        </form>

        <p className="text-[#b5bac1] text-sm text-center mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#00a8fc] hover:underline"
          >
            Log In
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;