"use client";
import React, { useState } from "react";
import UserForm from "./[components]/UserForm"; // Adjust the path if needed

const Home = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpForm((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleSignUpClick}>
        {showSignUpForm ? "" : "Sign Up"}
      </button>
      {showSignUpForm && <UserForm />}
    </div>
  );
};

export default Home;
