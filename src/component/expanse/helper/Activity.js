import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
function Activityhelper() {
  return (
    <>
      <div className=" flex items-center gap-2 bg-[#96fc96] w-full py-4 rounded-lg px-3">
        <p className="text-[#1a521a] font-semibold tracking-wide">
          Activitys not perform yet !
        </p>
        <span className=" text-2xl  text-[#1a521a]">
          <BsEmojiSmile />
        </span>
      </div>
    </>
  );
}

export default Activityhelper;
