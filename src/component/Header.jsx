import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ease from "../images/ease.png";

// Icons
import { FaPlus } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LiaMoneyBillSolid } from "react-icons/lia";
import CreateGroup from "./createGroupsComponents/CreateGroup";
import { GroupContext } from "../context/global";
import Button from "../UIKIT/Button";
import GeneralAvatar from "../generalAvatar/GeneralAvatar";
import useGetAPIRequest from "../customHook/useGetAPIRequest";
import { GET_USER_INFORMATION } from "../queryKeys/QueryKeys";

function Header() {
  const location = window.location.href.split("/");
  const id = location[location.length - 1];
  const { setOpenGroupPopUp } = useContext(GroupContext);
  const { data: userInformation } = useGetAPIRequest(
    "/getUserInfomation",
    "/login",
    GET_USER_INFORMATION("/getGroup", "/login")
  );

  return (
    <>
      {/* Desktop Header */}
      <header className="border-b bg-white">
        <section
          className=" flex justify-between items-center py-4 px-24 max-[1250px]:px-16 max-[950px]:px-10 max-[650px]:px-4 max-[650px]:py-3.5 
      min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]"
        >
          <div className="flex items-center gap-2">
            <img
              src={ease}
              alt=""
              className="h-8 mix-blend-normal max-[650px]:h-7"
            />
            <h1 className="text-[#181818] font-Nunito font-semibold text-2xl tracking-wide max-[650px]:text-xl ">
              SplitEase
            </h1>
          </div>
          <nav className={` max-[650px]:hidden `}>
            <ul className=" flex items-center gap-6">
              <Link to="/">
                <li
                  className={`text-[16px] font-Nunito tracking-wide font-medium cursor-pointer
                  ${id === "" ? "text-green-600" : "text-gray-500"}`}
                >
                  Home
                </li>
              </Link>
              <Link to="/groups">
                <li
                  className={`text-[16px] font-Nunito tracking-wide font-medium cursor-pointer
                    ${id === "groups" ? "text-green-600" : "text-gray-500"}`}
                >
                  Group
                </li>
              </Link>
              <Link to="/bills">
                <li
                  className={`text-[16px] font-Nunito tracking-wide font-medium cursor-pointer
                    ${id === "bills" ? "text-green-600" : "text-gray-500"}`}
                >
                  Bills
                </li>
              </Link>
              <Link to="/activity">
                <li
                  className={`text-[16px] font-Nunito tracking-wide font-medium cursor-pointer
                    ${id === "activity" ? "text-green-600" : "text-gray-500"}`}
                >
                  Activity
                </li>
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              label="Create Group"
              type="button"
              onClick={() => setOpenGroupPopUp(true)}
              customStyle="bg-blue-500 px-4 py-2 tracking-wide text-[#fff] hover:bg-blue-700 font-medium text-base max-[650px]:hidden"
            />
            <Link to="/account">
              <GeneralAvatar
                height={40}
                width={40}
                name={userInformation?.data?.name}
              />
            </Link>
          </div>
        </section>
      </header>

      {/* Mobile Header */}

      <header className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 max-[650px]:z-50">
        <div className="flex justify-between">
          <Link to="/" className=" p-2">
            <button
              className={`flex flex-col items-center justify-center  
              ${id === "" ? "text-green-600" : "text-gray-500"}`}
            >
              <IoHomeOutline className=" h-5 w-5" />
              <span className="text-xs">Home</span>
            </button>
          </Link>
          <Link to="/groups" className=" p-2">
            <button
              className={`flex flex-col items-center justify-center ${
                id === "groups" ? "text-green-600" : "text-gray-500"
              }`}
            >
              <HiOutlineUserGroup className=" h-6 w-6" />
              <span className="text-xs">Groups</span>
            </button>
          </Link>

          <button
            className="flex flex-col items-center justify-center p-2 relative"
            onClick={() => setOpenGroupPopUp(true)}
          >
            <div className="absolute -top-3 bg-green-600 rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
              <FaPlus className=" text-[#fff] w-8 h-6" />
            </div>
            <span className="text-xs mt-10 text-gray-500">Add</span>
          </button>
          <Link to="/bills" className=" p-2">
            <button
              className={`flex flex-col items-center justify-center ${
                id === "bills" ? "text-green-600" : "text-gray-500"
              }`}
            >
              <LiaMoneyBillSolid className=" h-6 w-6" />
              <span className="text-xs">All Bills</span>
            </button>
          </Link>
          <Link to="/activity" className="p-2">
            <button
              className={`flex flex-col items-center justify-center ${
                id === "activity" ? "text-green-600" : "text-gray-500"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span className="text-xs">Activity</span>
            </button>
          </Link>
        </div>
      </header>

      {/* Create Groups pop up */}
      <CreateGroup />
    </>
  );
}

export default Header;
