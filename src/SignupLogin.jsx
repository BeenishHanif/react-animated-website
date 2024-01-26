import React, { useState } from "react";
import image from "./images/signuplogin.jpg";
import InputField from "./InputField";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const SignupLogin = () => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    e.preventDefault();
  };

  const [signUp,setSignup]=useState(false);

  const signUpPage=()=>{
    setSignup(!signUp);
  }
  return (
    <div className="md:bg-[#fefefe] h-screen flex justify-center items-center">
      <div className="xl:rounded-xl md:shadow-lg md:shadow-[#401853] h-screen xl:h-4/5 flex flex-row overflow-hidden">
        <div className={`hidden md:flex w-1/2 lg:w-2/3 object-cover justify-center ${!signUp ? "transition-transform duration-75 ease-linear translate-x-[100%] lg:translate-x-[75%]" :"translate-x-0 transition-transform duration-75 ease-linear "}`}>
          <img src={image} className="h-full  relative " />
          <div className="absolute text-white bottom-1/4  flex flex-col gap-5 justify-center align-center">
            <h1 className="text-4xl text-bold m-auto font-body">{!signUp ? "HELLO FRIEND!" : "WELCOME BACK!"}</h1>
            <h1 >{!signUp ? "Enter your personal details and start journey with us!": "To keep Connected with us please login with your credentials"}</h1>
          <button className="rounded-full m-auto w-fit py-2 px-4 border-white border-2" onClick={signUpPage}>{!signUp ? "Sign up":"Sign in"}</button>
          </div>
        </div>

        <form
          className={`w-full md:w-1/2 bg-[#fefefe] ${!signUp ? "transition-transform duration-75 ease-linear -translate-x-0 md:-translate-x-[100%] lg:-translate-x-[133%]" :"-translate-x-0 transition-transform duration-75 ease-linear "} flex justify-center items-center `}
          onsubmit={handleLogin}
        >{ !signUp ? (
          <div className="flex flex-col">
            <div className="font-inter">
              <h1 className="font-extrabold text-2xl text-[#401853] ">Account Login</h1>
              <p className="text-sm leading-5 py-4">
                Become a member and enjoy exclusive deals and discounts.
              </p>
            </div>

            <InputField
              title={"Email Address"}
              id="email"
              type="text"
              autoFocus={true}
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputField
              title={"Password"}
              id="password"
              type={showPassword ? "text" : "password"}
              autoFocus={true}
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightIcon={
                <button
                  type="button"
                  className=""
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              }
            />

            <div className="flex gap-2 pt-3">
              <input
                type="checkbox"
                id="remember"
                className="checked:accent-[#51147E]"
              />
              <label className="text-sm text-[#696F79] ">Remember me</label>
            </div>
            <button className="rounded font-inter p-2 font-body text-center w-full mt-4 bg-[#401853] hover:border-[#401853] hover:border-2 hover:rounded hover:bg-white hover:text-[#401853] text-white">
              Log in
            </button>
         
          </div>
):(<div className="flex flex-col">
<div className="font-inter">
  <h1 className="font-extrabold text-2xl text-[#401853] ">Account Signup</h1>
  <p className="text-sm leading-5 py-4">
    Become a member and enjoy exclusive deals and discounts.
  </p>
</div>
<InputField
  title={"Name"}
  id="Name"
  type="text"
  autoFocus={true}
  required={true}
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<InputField
  title={"Email Address"}
  id="email"
  type="text"
  autoFocus={true}
  required={true}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<InputField
  title={"Password"}
  id="password"
  type={showPassword ? "text" : "password"}
  autoFocus={true}
  required={true}
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  rightIcon={
    <button
      type="button"
      className=""
      onClick={togglePasswordVisibility}
    >
      {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
    </button>
  }
/>

<div className="flex gap-2 pt-3">
  <input
    type="checkbox"
    id="remember"
    className="checked:accent-[#51147E]"
  />
  <label className="text-sm text-[#696F79] ">Remember me</label>
</div>
<button className="rounded font-inter p-2 font-body text-center w-full mt-4 bg-[#401853] hover:border-[#401853] hover:border-2 hover:rounded hover:bg-white hover:text-[#401853] text-white">
  {!signUp ? "Log in":"Sign up"}
</button>

</div>

)}
        </form>
      </div>
    </div>
  );
};

export default SignupLogin;
