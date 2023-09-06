import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import showPassword from "../component/showPassword";
import computer from "../images/computer.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();
  const registerUser = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("name is Require");
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
      return toast.error("Plesae enter correct email");
    } else if (
      !password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/)
    ) {
      return toast.error("Enter Strong Password");
    }
    const data = {
      name,
      email,
      password,
    };
    const response = await fetch(
      "https://bills-splitter-backend.onrender.com/registration",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const newData = await response.json();
    if (newData.success === true) {
      toast.success(newData.response);
      navigator("/login");
    } else {
      toast.error(newData.response);
    }
  };

  return (
    <>
      <section
        className="min-[1600px]:w-[1400px] select-none h-screen max-[650px]:h-full pb-10 bg-[#C2D5EB]
       min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%] "
      >
        <header className="py-4 px-5">
          <h1 className="text-[#181818] font-Nunito font-semibold text-xl ">
            SplitEase
          </h1>
        </header>
        <div
          className="relative flex justify-between max-[650px]:mt-7
        max-[650px]:flex-col max-[650px]:justify-normal max-[650px]:gap-10 mt-16  items-center px-6"
        >
          <div className="w-7/12  max-[650px]:w-full">
            <img
              src={computer}
              alt=""
              className="mx-7 mb-5 flex justify-center"
            />
            <h1 className=" font-Roboto font-bold text-4xl text-[#181818]">
              Hi There,
            </h1>
            <p className="mt-3 text-[#181818] text-base pr-4">
              We are happy to have you with us ! just fill the form on the right
              side and Create your account on our website and access special
              member benefits.
            </p>
          </div>
          <div className="  p-5 bg-[#edf5fc] w-[350px] rounded-lg max-[650px]:w-full ">
            <h2 className="text-center text-[#181818] font-Roboto tracking-wide font-semibold mt-5">
              Create an Account
            </h2>
            <form action="" className="flex flex-col px-3  gap-2 mt-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="px-4 py-2 outline-[#B6D7FA] text-base"
                id="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                className="px-4 py-2 outline-[#B6D7FA] text-base"
                placeholder="email"
              />
              <div className="flex flex-col relative gap-2">
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  placeholder="password"
                  className="pl-4 py-2 outline-[#B6D7FA] text-base pr-7"
                />
                <div
                  className="absolute right-2 top-11 cursor-pointer"
                  onClick={showPassword}
                >
                  <AiFillEye id="showEye" className=" text-[#98c2f0]" />
                  <AiFillEyeInvisible
                    style={{ display: "none" }}
                    id="hideEye"
                    className=" text-[#98c2f0]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-Roboto py-1.5 tracking-wide rounded-lg mt-4"
                onClick={registerUser}
              >
                Sign Up
              </button>
              <p className="text-sm text-center mt-2">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="cursor-pointer text-blue-400 font-semibold">
                    Login Here
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
        <Toaster />
      </section>
    </>
  );
}

export default Registration;
