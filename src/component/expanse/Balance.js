import React from "react";
import Balancehelper from "./helper/Balancehelper";
import { BsEmojiSmile } from "react-icons/bs";

function Balance({ allExpense, user }) {
  return (
    <>
      <header className=" mx-5 mt-4 font-semibold text-lg border-b pb-4">
        <h1> My Bills</h1>
      </header>
      <section
        className={`gap-x-3.5 gap-y-6 px-5 items-center
              max-[550px]:grid-cols-1 my-4 max-[550px]:px-0
              ${allExpense.length !== 0 ? "grid grid-cols-2" : ""}`}
      >
        {allExpense.length === 0 ? (
          <div className=" flex items-center gap-2 bg-[#96fc96] w-full py-4 rounded-lg px-3 mx-5">
            <p className="text-[#1a521a] font-semibold tracking-wide">
              Bills not found
            </p>
            <span className=" text-2xl  text-[#1a521a]">
              <BsEmojiSmile />
            </span>
          </div>
        ) : (
          [...allExpense].reverse().map((element) => {
            return element.participants.map((participant, index) => {
              if (
                element.createrId === user.email &&
                participant.email !== element.createrId
              ) {
                return (
                  <Balancehelper
                    element={element}
                    user={user}
                    participant={participant}
                    key={index}
                  />
                );
              }
              if (
                element.createrId !== participant.email &&
                participant.email === user.email
              ) {
                return (
                  <Balancehelper
                    element={element}
                    user={user}
                    participant={participant}
                    key={index}
                  />
                );
              } else {
                return "";
              }
            });
          })
        )}
      </section>
    </>
  );
}

export default Balance;
