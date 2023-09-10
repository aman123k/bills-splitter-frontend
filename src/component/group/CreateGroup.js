import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { MdGroups2 } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";
import GroupType from "../../data/GroupType";
import getGroups from "./getGroup";
import { ThemeContext } from "../../context/global";
function CreateGroup({ setImage, setMembers, setUser }) {
  const { open, setOpen } = useContext(ThemeContext);
  const [groupname, setGroupName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [groupType, setGroupType] = useState("");

  const [groupMember, setGroupMember] = useState([]);
  const addMember = () => {
    if (!name) {
      return toast.error("Please enter name");
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
      return toast.error("Enter correct email");
    }
    const otherMumberDetais = {
      name: name,
      email: email,
      settlement: false,
    };
    setGroupMember((previous) => {
      return [...previous, otherMumberDetais];
    });
    setEmail("");
    setName("");
  };
  const deleteGroupMember = (name) => {
    const deletedMumber = groupMember.filter((mumber) => {
      return mumber.name !== name;
    });
    setGroupMember(deletedMumber);
  };
  const createGroup = async (e) => {
    e.preventDefault();
    if (!groupname) {
      return toast.error("Enter Group name");
    } else if (groupMember.length === 0) {
      return toast.error("Please Add Group member");
    } else if (groupType === "") {
      return toast.error("Please select type ");
    } else {
      const data = {
        groupName: groupname,
        member: groupMember,
        groupType: groupType,
      };
      const response = await toast.promise(
        fetch(`https://bills-splitter-backend.onrender.com/group`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }),
        {
          loading: "loading data",
          success: "data loaded successfully",
          error: "faild to load data",
        }
      );
      const result = await response.json();
      if (result.success) {
        toast.success(result.response);
        setGroupName("");
        setGroupMember([]);
        setGroupType("");
        getGroups(setImage, setMembers, setUser);
      } else {
        toast.error(result.response);
      }
    }
  };
  return (
    <>
      <section className={`${open ? "block overflow-hidden" : "hidden"}`}>
        <div className=" absolute  top-0 w-screen h-screen bg-[#000] z-50 opacity-40"></div>
        <form
          className="absolute p-4 bg-white rounded-xl shadow-lg shadow-[#181818] z-50 w-[450px] 
        top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] max-[500px]:w-[90%]"
        >
          <div className=" flex items-center  border-b-2 justify-between pb-4 ">
            <h1
              className="flex items-center gap-2 font-semibold
             text-[#181818] tracking-wide "
            >
              Add New Group Here <MdGroups2 className="text-2xl" />
            </h1>
            <span
              onClick={() => setOpen(false)}
              className="text-2xl font-bold cursor-pointer"
            >
              <RxCross2 />
            </span>
          </div>
          <div className="flex flex-col mt-3 gap-2.5">
            <span className=" font-semibold text-[#151515]">Group Name</span>
            <input
              type="text"
              className="outline-[#B6D7FA] bg-[#f1f1f1] px-2.5 py-1.5 rounded-md"
              placeholder="Group name"
              value={groupname}
              onChange={(e) => setGroupName(e.currentTarget.value)}
            />
          </div>
          <div>
            <h2 className=" text-center mt-3 text-[#181818] font-semibold">
              Member
            </h2>
            {groupMember.length === 0 ? null : (
              <div
                className="flex gap-3 overflow-x-scroll scrollbar-thin mt-4
                scrollbar-thumb-[#fafafa] scrollbar-track-white "
              >
                {groupMember.map((details, index) => {
                  return (
                    <div
                      className="bg-blue-600 shadow text-white px-2 py-1 rounded-lg hover:bg-red-500 cursor-pointer"
                      key={index}
                      onClick={() => deleteGroupMember(details.name)}
                    >
                      {details.name}
                    </div>
                  );
                })}
              </div>
            )}
            <section
              className={`flex gap-2 ${
                groupMember.length === 0 ? "mt-8" : "mt-5"
              } `}
            >
              <div className=" flex flex-col gap-2 w-[50%]">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  className="outline-[#B6D7FA] bg-[#f1f1f1] px-2.5 py-1.5 rounded-md w-full"
                />
              </div>
              <div className=" flex flex-col gap-2 w-[50%]">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  className="outline-[#B6D7FA] bg-[#f1f1f1] px-2.5 py-1.5 rounded-md w-full"
                />
              </div>
            </section>
            <button
              type="button"
              className=" bg-green-600 text-white font-semibold 
              px-2 py-1.5 rounded-lg mt-5 max-[550px]:text-[15px] font-Nunito"
              onClick={() => addMember()}
            >
              + Add Member
            </button>
            <div
              className="flex text-center mt-4 gap-3.5 max-[550px]:overflow-x-scroll 
            max-[550px]:mt-2 max-[550px]:p-2 "
            >
              {GroupType.map((type, index) => {
                return (
                  <span
                    className={`bg-[#f1f1f1] rounded-lg shadow-md shadow-black drop-shadow-lg 
               cursor-pointer select-none flex flex-col justify-center items-center
              ${groupType === type.name ? "border-2 border-orange-500" : ""}
              ${type.name === "Personal" ? "px-1 py-2" : "p-2"}
              `}
                    onClick={() => setGroupType(type.name)}
                    key={index}
                  >
                    <div className="bg-[#f8e2ba] w-10 h-10 rounded-full">
                      <img
                        src={type.Image}
                        className=" object-contain h-full w-full mix-blend-multiply"
                        alt=""
                      />
                    </div>
                    <p
                      className={`text-[14px] mt-1  font-Nunito font-semibold
                   ${type.name === "Personal" ? "" : "max-[550px]:w-10"}`}
                    >
                      {type.name}
                    </p>
                  </span>
                );
              })}
            </div>
            <button
              type="submit"
              className=" bg-blue-600 w-full  text-white font-semibold tracking-wide
            px-2 py-1.5 rounded-lg mt-8 mb-3 max-[550px]:text-[15px] font-Nunito "
              onClick={(e) => createGroup(e)}
            >
              Create Group
            </button>
            <hr />
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className=" bg-[#181818] text-white font-serif tracking-wider px-2 
            py-1 rounded-lg mt-3 text-end float-right"
          >
            Close
          </button>
        </form>
        <Toaster />
      </section>
    </>
  );
}

export default CreateGroup;
