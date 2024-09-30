import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Send login request to the backend
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/v1/users/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          navigate("/home"); // Navigate without /api prefix
        } else {
          alert("Incorrect Credentials !!"); // Show alert for incorrect credentials
        }
      })
      .catch((err) => {
        console.error(err);
        const errorMessage =
          err.response?.data?.message ||
          "An error occurred while logging in. Please try again.";
        alert(errorMessage); // Show specific error message
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`relative flex justify-center items-center w-full h-[100vh] ${
          darkMode ? "bg-black" : "bg-[#282D2D]"
        }`}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center ${
            darkMode ? "bg-black opacity-70" : ""
          } filter blur-sm`}
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663091288737-8316f2640ffe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        ></div>

        <div
          className={`relative z-10 flex flex-col items-center justify-start w-full xl:max-w-3xl p-5 sm:p-10 rounded-md shadow-lg ${
            darkMode ? "bg-[#2c2c2c]" : "bg-white"
          }`}
        >
          <div className="flex w-full justify-end mb-2">
            <h3 className={darkMode ? "text-white" : "text-black"}>
              Dark Mode:&nbsp;
            </h3>
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                readOnly
              />
              <div
                onClick={() => setDarkMode(!darkMode)}
                className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
              ></div>
            </label>
          </div>

          <h1
            className={`text-center text-xl sm:text-3xl font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Login Your Account
          </h1>

          <div className="w-full mt-8">
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
              <input
                className={`w-full px-5 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none ${
                  darkMode
                    ? "bg-[#302E30] text-black focus:border-white"
                    : "focus:border-black"
                }`}
                type="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={`w-full px-5 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none ${
                  darkMode
                    ? "bg-[#302E30] text-black focus:border-white"
                    : "focus:border-black"
                }`}
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-white w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <span className="ml-3">Login</span>
              </button>

              <p className="mt-6 text-xs text-gray-600 text-center">
                Don't have an account?{" "}
                <Link to="/register">
                  <span className="text-[#E9522C] font-semibold">Register</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
