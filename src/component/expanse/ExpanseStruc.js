import React, { useContext } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import Checkbutton from "./helper/Checkbutton";
import { ThemeContext } from "../../context/global";

function ExpanseStruc({ addExpense, Member, user, allExpense }) {
  const { settlement, setSettlement } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`w-[56%]  ml-5 max-[950px]:w-full max-[950px]:px-5 max-[950px]:ml-0 `}
      >
        <h1 className=" text-lg font-semibold tracking-wide pb-3">
          Your Expenses
        </h1>
        <hr />
        {/* scroll section */}
        <section
          className={` min-[1250px]:h-[73vh] mt-3.5 pr-3 max-[950px]:pr-0 
          max-[950px]:h-full max-[950px]:scrollbar-none  overflow-y-scroll scrollbar-thin
           scrollbar-thumb-purple-500 ${
             Member.member?.length >= 3 ? "h-[69vh]" : "h-[66vh]"
           } `}
        >
          <div
            className={`max-[950px]:grid max-[950px]:grid-cols-2 flex capitalize
               flex-col gap-3 w-full max-[650px]:flex max-[950px]:mb-4`}
          >
            {allExpense.length !== 0 ? (
              [...allExpense]?.reverse()?.map((expense, index) => {
                return (
                  <div
                    className="rounded-lg overflow-hidden bg-gray-300"
                    key={index}
                  >
                    <div className=" grid grid-cols-3 justify-between text-white bg-purple-800 ">
                      <span className="border-r px-3 tracking-wide border-black py-2">
                        Expense
                      </span>
                      <span className="border-r border-black tracking-wide p-2">
                        Amount
                      </span>
                      <span className="p-2 tracking-wide">Settlement</span>
                    </div>
                    <div className=" grid grid-cols-3 justify-between items-center my-2.5">
                      <div className=" px-3">
                        <span
                          className={`font-semibold ${
                            expense.createrId === user.email
                              ? "text-green-700"
                              : "text-red-700"
                          } `}
                        >
                          {expense.expenseName}
                        </span>
                        <p className="text-[11px]">
                          Created by
                          {expense.createrId === user.email
                            ? " You"
                            : ` ${
                                expense.participants[
                                  expense.participants.length - 1
                                ].name
                              }`}
                        </p>
                      </div>
                      <span className="p-2">{expense.amount}</span>
                      <button
                        className=" text-start py-1.5 px-2 text-sm font-semibold tracking-wider
                        rounded-lg bg-blue-500 text-white mx-2 w-max"
                        onClick={() => {
                          setSettlement(expense.expenseName);
                        }}
                      >
                        Check
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className=" flex items-center gap-2 bg-[#96fc96] w-full py-4 rounded-lg px-3">
                <p className="text-[#1a521a] font-semibold tracking-wide">
                  Expense not created yet !
                </p>
                <span className=" text-2xl  text-[#1a521a]">
                  <BsEmojiSmile />
                </span>
              </div>
            )}
          </div>
        </section>
      </div>
      {settlement === "" ? (
        ""
      ) : (
        <Checkbutton allExpense={allExpense} user={user} />
      )}
      <div
        className={`absolute top-0 w-full bg-black opacity-40 h-full translate-x-[-100%] duration-70000 ease-in-out
           ${
             addExpense
               ? "max-[950px]:translate-x-0 "
               : "max-[950px]:translate-x-[-100%] hidden"
           }`}
      ></div>
    </>
  );
}

export default ExpanseStruc;
