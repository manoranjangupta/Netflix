import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignUpForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="IMG"
        ></img>
      </div>
      <form className=" w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 text-white bg-black rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       
        {!isSignInForm && (
         <input
          type="input"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700"
        ></input> )}
       
        <input
          type="input"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
       
        <input
          type="input"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg ">
         {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm ? " New to Netflix? Sign Up Now" : "Already registered Sign In now"}
         
          </p>
      </form>
    </>
  );
};

export default Login;
