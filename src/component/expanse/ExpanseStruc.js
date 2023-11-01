import React, { useContext } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import Checkbutton from "./helper/Checkbutton";
import { ThemeContext } from "../../context/global";

function ExpanseStruc({ addExpense, Member, user, allExpense }) {
  const { settlement, setSettlement } = useContext(ThemeContext);
  return (
    <>
      <div className={`w-[56%] max-[950px]:w-full `}>
        <h1 className=" text-lg font-semibold tracking-wide py-3 max-[650px]:py-1 mx-7">
          Your Expenses
        </h1>
        <hr />
        {/* scroll section */}
        <section
          className={`h-[calc(100vh-170px)] max-[650px]:h-[calc(100vh-240px)]
         overflow-y-scroll scrollbar-thin scroll-smooth scrollbar-thumb-[#a7a7a7] 
        `}
        >
          <div
            className={` px-3.5  py-3  max-[950px]:grid flex capitalize
          flex-col gap-3 w-full max-[650px]:flex max-[650px]:px-4     
           ${
             allExpense.length !== 0
               ? " max-[950px]:grid-cols-2"
               : " max-[950px]:grid-cols-1"
           }`}
          >
            {allExpense.length !== 0 ? (
              [...allExpense]?.reverse()?.map((expense, index) => {
                return (
                  <div
                    className="rounded-lg overflow-hidden  bg-gray-300"
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
              <div className=" flex items-center h-max gap-2 bg-[#96fc96] w-full py-4 rounded-lg px-3">
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
        className={`absolute top-0 w-full bg-black opacity-40 h-screen translate-x-[-100%] duration-70000 ease-in-out
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
