"use client";
import React, { useState } from "react";
import UserForm from "./[components]/UserForm"; // Adjust the path if needed
import Verify from "./[components]/Verify"; // Adjust the path if needed

const Home = () => {
  const [showComponent, setShowComponent] = useState("");

  const handleSignUpClick = () => {
    setShowComponent("verify");
  };

  return (
    <div>
      <button onClick={handleSignUpClick}>
        {showComponent ? "" : "Sign Up"}
      </button>
      {showComponent === "verify" && <Verify />}
    </div>
  );
};

export default Home;
