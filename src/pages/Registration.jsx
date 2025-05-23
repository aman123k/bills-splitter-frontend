import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import showPassword from "../component/showPassword";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// images
import ease from "../images/ease.png";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import useGoogleAuth from "../customHook/useGoogleAuth";
import usePostAPIRequest from "../customHook/usePostAPIRequest";
import { GROUP_MESSAGE } from "../constants/constants";
import Button from "../UIKIT/Button";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateAsync } = usePostAPIRequest();

  const url = process.env.REACT_APP_URL;
  const navigator = useNavigate();
  const googleAuth = useGoogleAuth(url);
  const registerUser = async (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      return toast.error(GROUP_MESSAGE?.NAME);
    } else if (!email.trim().match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
      return toast.error(GROUP_MESSAGE.EMAIL);
    } else if (
      !password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/)
    ) {
      toast.error(GROUP_MESSAGE.PASSWORD);
    } else {
      const data = {
        name,
        email,
        password,
      };
      const path = "/registration";
      const response = await mutateAsync({ path, data });
      if (response?.status) {
        navigator("/login");
      }
    }
  };

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

        <section className="mt-16 max-[650px]:mt-10">
          <div className=" text-center flex flex-col gap-2">
            <h2 className=" font-Roboto font-semibold text-[32px] max-[650px]:text-[28px] text-[#181818] tracking-wide">
              Hi There,
            </h2>
            <p className="text-[16px] font-medium w-[600px] m-auto text-[#181818] max-[650px]:w-full max-[650px]:text-[14px] max-[650px]:">
              We are happy to have you with us ! just fill the form and Create
              your account on our website and access special member benefits.
            </p>
          </div>
          <div className=" m-auto  flex flex-col justify-center items-center gap-3 mt-5 w-[400px] max-[650px]:w-full">
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
            <div className=" flex items-center gap-2 w-full mt-2">
              <div className=" bg-[#181818] w-full h-[.1px]"></div>
              <h3>OR</h3>
              <div className=" bg-[#181818] w-full h-[.1px]"></div>
            </div>
            <form action="" className=" w-full flex flex-col gap-3 font-medium">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                className="px-4 py-2.5 text-base tracking-wide font-Roboto rounded-lg outline-[#dadada]"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />

              <label htmlFor="email">Email*</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="px-4 py-2.5 text-base tracking-wide font-Roboto rounded-lg outline-[#dadada]"
                placeholder="Enter your email"
              />
              <div className="flex flex-col relative gap-2 font-medium">
                <label htmlFor="password">Password*</label>
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
                label="Sign Up"
                type="submit"
                onClick={registerUser}
                customStyle="bg-blue-500 text-white  py-2.5 tracking-wide font-medium mt-4"
              />

              <p className="text-[16px] tracking-normal text-center mt-2">
                Create a new account ?{" "}
                <Link to="/login">
                  <span className="cursor-pointer text-[#009344] font-semibold font-Nunito">
                    Login Here
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

export default Registration;
