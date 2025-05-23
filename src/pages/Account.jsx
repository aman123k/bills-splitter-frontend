import React, { useState } from "react";
import Header from "../component/Header";
import img from "../images/reciver.jpg";
import { BiPencil, BiSolidContact } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiFillStar, AiOutlineLogin } from "react-icons/ai";
import useGetAPIRequest from "../customHook/useGetAPIRequest";
import { GET_USER_INFORMATION } from "../queryKeys/QueryKeys";
import usePostAPIRequest from "../customHook/usePostAPIRequest";

function Account() {
  const { mutateAsync } = usePostAPIRequest();
  const { data: userInformation } = useGetAPIRequest(
    "/getUserInfomation",
    "/login",
    GET_USER_INFORMATION("/getGroup", "/login")
  );

  const userLogout = async () => {
    const response = await mutateAsync({ path: "/logOut", data: {} });
    if (response?.status) {
      window.location.href = "/login";
    }
  };
  const [picture, setPicture] = useState(img);

  function uploadImage(e) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        localStorage.setItem("profileImage", e.currentTarget.result);
        setPicture(e.currentTarget.result);
      };
      reader.readAsDataURL(e.currentTarget.files[0]);
    }
  }
  return (
    <div
      className="min-[1600px]:w-[1400px] h-screen min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]
    bg-[#f3f3f3]"
    >
      <Header />
      <section
        className=" ml-[50%] translate-x-[-50%] justify-center items-center w-[550px]
       rounded-lg bg-white drop-shadow-xl p-7 mt-10 max-[550px]:w-[80%] mx-5"
      >
        <section
          className=" border-b flex gap-5 max-[550px]:flex-col max-[550px]:text-center
         items-center justify-center pb-4 max-[550px]:gap-2"
        >
          <section className=" relative">
            <div className="w-24 h-24 rounded-full max-[550px]:w-20 max-[550px]:h-20 overflow-hidden">
              <img
                src={
                  localStorage.getItem("profileImage")
                    ? localStorage.getItem("profileImage")
                    : picture
                }
                alt=""
                className="h-full object-cover w-full bg-blend-multiply"
              />
            </div>
            <div
              className="absolute bottom-2 max-[550px]:bottom-0 right-0 cursor-pointer bg-green-300 p-1 rounded-full"
              onClick={() => document.getElementById("file").click()}
            >
              <BiPencil className=" text-lg text-green-900" />
              <input
                type="file"
                className="hidden"
                id="file"
                onChange={(e) => uploadImage(e)}
              />
            </div>
          </section>
          <header className=" ">
            <h1 className=" font-semibold text-xl ">
              {userInformation?.data?.name}
            </h1>
            <p className=" text-gray-500 tracking-wide">
              {userInformation?.data?.email}
            </p>
          </header>
        </section>
        <div
          className=" flex items-center gap-3
           tracking-wide font-semibold py-3 border-b-2 border-dotted"
        >
          <SlEnvolopeLetter className="text-blue-800 text-lg" />
          <p>Invite friends</p>
        </div>
        <div
          className="flex items-center gap-3
           tracking-wide font-semibold py-3 border-b-2 border-dotted"
        >
          <AiFillStar className="text-blue-800 text-xl" />
          <p>Rate us</p>
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer
           tracking-wide font-semibold py-3 border-b-2 border-dotted"
        >
          <BiSolidContact className="text-blue-800 text-lg" />
          <p>Contact us</p>
        </div>

        <button
          className=" flex gap-3 py-3 border-b-2 border-dotted w-full items-center
           tracking-wide font-semibold"
          onClick={() => userLogout()}
        >
          <AiOutlineLogin className="text-blue-800 text-lg" />
          <p>Logout</p>
        </button>
        <span className="flex justify-center mt-4 text-sm text-gray-500">
          V4.6.4
        </span>
      </section>
    </div>
  );
}

export default Account;
