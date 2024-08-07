"use client";
import React, { useState } from "react";
import UserForm from "./[components]/UserForm"; // Adjust the path if needed
import Verify from "./[components]/Verify"; // Adjust the path if needed
import Login from "./[components]/Login"; // Adjust the path if needed

const Home = () => {
  const [showComponent, setShowComponent] = useState("");

  const handleSignUpClick = () => {
    setShowComponent("verify");
  };

  const handleLoginClick = () => {
    setShowComponent("login");
  };

  return (
    <div>
      <button onClick={handleSignUpClick}>
        {showComponent === "" ? "Sign Up" : ""}
      </button>
      <p onClick={handleLoginClick} style={{ cursor: "pointer", color: "blue" }}>
        {showComponent === "" ? "Login" : ""}
      </p>
      {showComponent === "verify" && <Verify />}
      {showComponent === "login" && <Login />}
    </div>
  );
};

export default Home;
