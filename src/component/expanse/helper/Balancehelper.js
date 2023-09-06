import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import img from "../../../images/reciver.jpg";
import sender from "../../../images/sender.jpg";
import settlement from "./settlement";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoCheckCircle } from "react-icons/go";
function Balancehelper({ element, user, participant }) {
  const navgation = useNavigate();
  return (
    <div
      className={`flex items-center bg-white drop-shadow-lg shadow-md shadow-[#181818] 
                       px-2.5 py-4 rounded-xl  justify-between  max-[550px]:mx-4 `}
    >
      <div
        className=" flex gap-2 items-center max-[550px]:gap-1.5 
                        max-[950px]:flex-col max-[950px]:text-center"
      >
        <img
          src={sender}
          alt=""
          className=" w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h2 className=" font-semibold text-[#181818] capitalize">
            {element.createrId !== user.email ? "You" : participant.name}
          </h2>
          <p className="text-xs overflow-hidden text-gray-400 mt-[-1px]">
            Expense {element.expenseName}
          </p>
        </div>
      </div>
      <div className=" flex items-center ">
        <AiOutlineMinus className="fill-black font-bold text-2xl" />
        <div className=" text-center">
          <span className=" text-green-600 max-[550px]:text-sm">
            {Math.round(element.amount / element.participants.length)}
          </span>
          <p className=" text-sm mt-[-2px] font-semibold ">Will pay</p>
        </div>
        <FaArrowRightLong className="text-xl" />
      </div>
      <div
        className=" flex gap-2 items-center max-[550px]:gap-1.5 
                    max-[950px]:flex-col max-[950px]:text-center  "
      >
        <div className="bg-purple-100 rounded-full overflow-hidden">
          <img
            src={img}
            alt=""
            className=" w-12 h-12 object-cover mix-blend-multiply"
          />
        </div>
        <div>
          <h2 className=" font-semibold text-[#181818] capitalize">
            {element.createrId !== user.email
              ? element.participants[element.participants.length - 1].name
              : "You"}
          </h2>
          <p className="text-xs text-gray-400 mt-[-1px]">
            {element.upiId ? element.upiId : "UPI ID"}
          </p>
        </div>
      </div>
      {participant.settlement === true ? (
        <GoCheckCircle className=" text-green-600 text-2xl" />
      ) : (
        <button
          className={` bg-purple-700 text-white px-1.5 py-1 text-sm tracking-wider
                        rounded-lg  max-[550px]:font-normal font-Nunito max-[550px]:tracking-normal
                        ${
                          element.createrId === user.email ? "block" : "hidden"
                        }`}
          onClick={() =>
            settlement(participant.email, element._id, navgation, toast)
          }
        >
          Settle
        </button>
      )}
    </div>
  );
}

export default Balancehelper;
