"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const res = await fetch("https://akil-backend.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-[34ppx] px-[156px] gap-8">
      <h1 className="font-poppins text-4xl font-black leading-10 text-center text-[#25324B]">
        Sign Up Today!
      </h1>
      <button className=" flex items-center gap-2 px-4 py-3 rounded-[5px] border border-[#CCCCF5] bg-white text-[#4640DE] my-4  font-epilogue font-bold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 48 48"
          className="fill-current"
        >
          <path
            fill="#ffc107"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
          />
          <path
            fill="#ff3d00"
            d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
          />
          <path
            fill="#4caf50"
            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
          />
          <path
            fill="#1976d2"
            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
          />
        </svg>
        Sign Up with Google
      </button>
      <div className="flex flex-row items-center gap-2">
        <hr className="w-[198px] h-0 border-t border-[#D6DDEB] " />
        <p className="font-epilogue text-base font-normal leading-7 text-center text-[#909298]">
          Or Sign Up with Email
        </p>
        <hr className="w-[198px] h-0 border-t border-[#D6DDEB]" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="signup-form flex flex-col gap-4 w-1/2"
      >
        <div className="flex flex-col gap-2">
          <label className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            required
            value={formData.name}
            className="border border-[#D6DDEB] rounded-sm px-3 py-2"
            placeholder="Enter your full name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            required
            value={formData.email}
            className="border border-[#D6DDEB] rounded-sm px-3 py-2"
            placeholder="Enter email address"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            required
            value={formData.password}
            className="border border-[#D6DDEB] rounded-sm px-3 py-2"
            placeholder="Enter password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-epilogue text-base font-semibold leading-7 text-left text-[#515B6F]">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            required
            value={formData.confirmPassword}
            className="border border-[#D6DDEB] rounded-sm px-3 py-2"
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          className="bg-[#23206f] text-white rounded-[80px] w-full py-2"
        >
          Continue
        </button>
      </form>
      <p className="text-red-500">{errorMessage}</p>
      <p className="font-epilogue text-base font-normal leading-[25.6px] text-[#202430] text-left my-2 ">
        Already have an account?{" "}
        <a href="/Login" className="text-[#23206f">
          Login
        </a>
      </p>
      <p className="w-full text-left text-[#7C8493] ">
        By clicking 'Continue', you acknowledge that you have read and accepted
        our{" "}
        <a className="text-[#23206f]" href="/terms">
          Terms of Service
        </a>{" "}
        and{" "}
        <a className="text-[#23206f]" href="/privacy">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default UserForm;
