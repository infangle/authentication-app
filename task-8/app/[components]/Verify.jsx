"use client";
import React, { useState, useEffect } from 'react';

const Verify = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [resendVisible, setResendVisible] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setResendVisible(true);
    }
  }, [timeLeft]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return; // Ensure only one character is entered
    setCode(prevCode => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });

    // Focus the next input box
    if (value && index < 3) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join('');
    if (verificationCode.length !== 4) {
      setErrorMessage('Please enter a 4-digit code.');
      return;
    }
    // Handle verification logic here
    console.log('Verification code submitted:', verificationCode);
    setErrorMessage(''); // Clear any previous error message
  };

  const handleResend = () => {
    // Handle resend code logic here
    console.log('Resend code');
    setTimeLeft(30);
    setResendVisible(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="font-poppins text-4xl font-black leading-10 text-center text-[#25324B] mb-4">
          Verify Email
        </h1>
        <p className="font-epilogue text-base font-normal leading-7 text-center text-[#515B6F] mb-6">
          We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full">
          <div className="flex justify-between gap-2 w-full">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-16 h-16 border-2 border-solid border-gray-300 text-center text-xl rounded-md"
              />
            ))}
          </div>
          <p className="font-epilogue text-base font-normal leading-7 text-center text-[#515B6F] mt-4">
            {resendVisible ? (
              <a
                href="#"
                className="text-[#4640DE] cursor-pointer"
                onClick={handleResend}
              >
                Resend code
              </a>
            ) : (
              <>
                You can request to resend the code in{" "}
                <span className="text-[#4640DE]">{`0:${timeLeft < 10 ? `0${timeLeft}` : timeLeft}`}</span>
              </>
            )}
          </p>
          <button type="submit" className="bg-[#23206f] text-white rounded-full px-6 py-2 mt-4">
            Verify
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Verify;
