"use client";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-md py-8 px-4 gap-8">
          <h2 className="font-poppins text-4xl font-black leading-10 text-center text-[#25324B]">
            Welcome Back,
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
                className="border border-[#D6DDEB] rounded-sm px-3 py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="border border-[#D6DDEB] rounded-sm px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-[#23206f] text-white rounded-[80px] w-full py-2"
            >
              Login
            </button>
            <p className="font-epilogue text-base font-normal leading-[25.6px] text-[#202430] text-center my-2">
              Don't have an account?{" "}
              <a href="/signup" className="text-[#23206f]">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-gray-100"></div> {/* Optional: Placeholder for the left half */}
    </div>
  );
};

export default Login;
