import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// icons
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
// images
import ease from "../images/ease.png";
// function
import showPassword from "../component/showPassword";
// toast
import toast from "react-hot-toast";
import useGoogleAuth from "../customHook/useGoogleAuth";
import usePostAPIRequest from "../customHook/usePostAPIRequest";
import { GROUP_MESSAGE } from "../constants/constants";
import Button from "../UIKIT/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = process.env.REACT_APP_URL;
  const navigator = useNavigate();
  const { mutateAsync } = usePostAPIRequest();

  const logInUser = async (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      toast.error(GROUP_MESSAGE.COMMAN_ERROR);
    } else {
      const data = {
        email,
        password,
      };
      const path = "/login";
      const response = await mutateAsync({ path, data });
      if (response?.status) {
        navigator("/");
      }
    }
  };

  // Google Authentication
  const googleAuth = useGoogleAuth(url);

  return (
    <>
      <section className="px-6 py-5 bg-[#eff0f4] min-h-screen">
        <header className="flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <img src={ease} alt="" className="h-8 mix-blend-normal" />
            <h1 className="text-[#181818] font-Nunito font-semibold text-2xl tracking-wide ">
              SplitEase
            </h1>
          </div>
        </header>

        <section className="mt-16">
          <div className=" text-center flex flex-col gap-2">
            <h2 className=" font-Roboto font-semibold text-[32px] max-[650px]:text-[28px] text-[#181818] tracking-wide">
              Welcome Back!
            </h2>
            <p className="text-[16px] font-medium w-[600px] max-[650px]:w-full m-auto max-[650px]:text-[14px] text-[#181818] ">
              Sign in to your account using the form. Please feel free to reach
              us anytime if you have any issues signing into your account
            </p>
          </div>
          <div className=" m-auto  flex flex-col justify-center items-center gap-3 mt-7 w-[400px] max-[650px]:w-full">
            <button
              className=" w-full bg-[#fff] px-10 cursor-pointer rounded-lg text-[16px] border font-bold justify-center
             tracking-wide font-Nunito py-2.5 flex items-center gap-5"
              onClick={googleAuth}
            >
              <FcGoogle className=" text-2xl" /> Log in with Google
            </button>
            <button
              className=" w-full bg-[#fff] px-10 cursor-pointer rounded-lg text-[16px] border font-bold justify-center
             tracking-wide font-Nunito py-2.5 flex items-center gap-5"
            >
              <SiGithub className=" text-2xl" />
              Log in with GitHub
            </button>
            <div className=" flex items-center gap-2 w-full mt-3">
              <div className=" bg-[#181818] w-full h-[.1px]"></div>
              <h3>OR</h3>
              <div className=" bg-[#181818] w-full h-[.1px]"></div>
            </div>
            <form action="" className=" w-full flex flex-col gap-3 font-medium">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="px-4 py-2.5 text-base tracking-wide font-Roboto rounded-lg outline-[#dadada]"
                placeholder="Enter your email"
              />
              <div className="flex flex-col relative gap-2 font-medium">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  placeholder="Enter your password"
                  className="px-4 py-2.5 text-base tracking-wide font-Roboto rounded-lg outline-[#dadada] pr-10"
                />
                <div
                  className="absolute right-3 top-[2.80rem] cursor-pointer"
                  onClick={showPassword}
                >
                  <AiFillEye
                    id="showEye"
                    size={18}
                    className=" text-[#98c2f0]"
                  />
                  <AiFillEyeInvisible
                    style={{ display: "none" }}
                    id="hideEye"
                    size={18}
                    className=" text-[#98c2f0]"
                  />
                </div>
              </div>
              <Button
                label="Log In"
                type="submit"
                onClick={logInUser}
                customStyle="bg-blue-500 text-white font-Roboto py-2.5 tracking-wide font-medium mt-4"
              />
              <p className="text-[16px] tracking-normal text-center mt-2">
                Create a new account ?{" "}
                <Link to="/registration">
                  <span className="cursor-pointer text-[#009344] font-semibold font-Nunito">
                    Signup Here
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}

export default Login;
