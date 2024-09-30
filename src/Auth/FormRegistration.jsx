import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FormRegistration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation for required fields
    if (!fname || !lname || !email || !password) {
      alert("Please fill out all required fields.");
      return;
    }

    // POST request to the updated API route
    axios
      .post("/api/v1/users/register", {
        fname: fname,
        lname: lname,
        email: email,
        phone: phone || undefined, // Handle optional phone field
        password: password,
      })
      .then((result) => {
        console.log("Registration successful:", result);
        navigate("/login"); // Redirect to login on successful registration
      })
      .catch((error) => {
        console.error(
          "Registration error:",
          error.response ? error.response.data : error.message
        );
        if (error.response) {
          if (error.response.status === 400) {
            alert("Email already exists. Please use a different email.");
          } else if (error.response.status === 500) {
            alert("Server error. Please try again later.");
          }
        } else {
          alert("An unexpected error occurred.");
        }
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
            Register for a free account
          </h1>
          <div className="w-full mt-8">
            <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  className={`w-full px-5 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none ${
                    darkMode
                      ? "bg-[#302E30] text-black focus:border-white"
                      : "focus:border-black"
                  }`}
                  type="text"
                  placeholder="Your first name"
                  required
                  onChange={(e) => setFname(e.target.value)}
                />
                <input
                  className={`w-full px-5 py-3 rounded-lg bg-gray-100 text-black placeholder-gray-500 text-sm focus:outline-none ${
                    darkMode
                      ? "bg-[#302E30] text-black focus:border-white"
                      : "focus:border-black"
                  }`}
                  type="text"
                  placeholder="Your last name"
                  required
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
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
                type="tel"
                placeholder="Enter your phone"
                onChange={(e) => setPhone(e.target.value)}
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
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Register</span>
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                Already have an account?{" "}
                <Link to={"/login"}>
                  <span className="text-[#E9522C] font-semibold">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormRegistration;
