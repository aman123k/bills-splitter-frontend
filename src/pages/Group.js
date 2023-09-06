import React, { useContext, useEffect, useState } from "react";
import Header from "../component/Header";
import CreateGroup from "../component/group/CreateGroup";
import img from "../images/billsIcon.jpg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import getGroups from "../component/group/getGroup";
import groupStucture from "../component/group/groupStucture";
import { ThemeContext } from "../context/global";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function Group() {
  const { open, setOpen } = useContext(ThemeContext);
  const [members, setMembers] = useState([]);
  const [image, setImage] = useState();
  const [user, setUser] = useState({});
  const navigation = useNavigate();
  useEffect(() => {
    getGroups(setImage, setMembers, setUser);
  }, []);
  return (
    <section
      className={`min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]
       ${open ? "h-screen overflow-hidden" : ""}`}
    >
      <Header />
      <section className=" flex gap-4 items-center mt-10 px-5 max-[550px]:flex-col ">
        <div className="w-[50%] max-[550px]:w-full">
          <img src={img} alt="" />
        </div>
        <div className=" w-[40%] max-[550px]:w-full">
          <p>
            Create a group of expense with people you split more often & would
            like to settle-up as per your convenience
          </p>
          <button
            className=" bg-blue-600 text-white font-Roboto items-center flex gap-1
           py-1.5 px-2 rounded-xl text-sm tracking-wider mt-4 max-[550px]:hidden"
            onClick={() => setOpen(true)}
          >
            <p>Create group</p> <span className=" font-bold text-lg">+</span>
          </button>
        </div>
      </section>
      <h1 className="border-b pb-3 font-Nunito font-semibold text-lg mx-5 max-[550px]:mt-8">
        My Groups
      </h1>
      <section
        className={`px-5 grid gap-3 my-4 max-[550px]:grid-cols-1 max-[550px]:gap-2
        ${members.length !== 0 ? "grid-cols-2" : ""}
      `}
      >
        {members.length !== 0 ? (
          [...members].reverse().map((member, index) => {
            return groupStucture(member, index, image, user, navigation);
          })
        ) : (
          <div className=" flex items-center gap-2 bg-[#96fc96] w-full py-4 rounded-lg px-3">
            <p className="text-[#1a521a] font-semibold tracking-wide">
              You are not part of any Group
            </p>
            <span className=" text-2xl  text-[#1a521a]">
              <BsEmojiSmile />
            </span>
          </div>
        )}
      </section>

      {/* for Moblie */}
      <div
        onClick={() => setOpen(true)}
        className="hidden max-[550px]:block fixed  text-4xl 
        font-bold text-purple-700 bottom-7 right-5 cursor-pointer"
      >
        <AiOutlinePlusCircle />
      </div>
      <CreateGroup
        setImage={setImage}
        setMembers={setMembers}
        setUser={setUser}
      />
      <Toaster />
    </section>
  );
}

export default Group;
