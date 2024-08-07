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

  const handleFormClick = () => {
    setShowComponent("userForm");
  };

  return (
    <div>
      <button onClick={handleSignUpClick}>
        {showComponent === "" ? "verify" : ""}
      </button>
      <p onClick={handleLoginClick} style={{ cursor: "pointer", color: "blue" }}>
        {showComponent === "" ? "Login" : ""}
      </p>
      <p onClick={handleFormClick} style={{ cursor: "pointer", color: "blue" }}>
        {showComponent === "" ? "signin" : ""}
      </p>
      {showComponent === "verify" && <Verify />}
      {showComponent === "login" && <Login />}
      {showComponent === "userForm" && <UserForm />}
    </div>
  );
};

export default Home;
