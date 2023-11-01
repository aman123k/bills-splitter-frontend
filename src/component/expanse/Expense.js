import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ExpanseStruc from "./ExpanseStruc.js";
import { useParams } from "react-router-dom";
import getExpense from "./GetExpense.js";
import { RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri";

function Expense({
  addExpense,
  setAddExpens,
  Member,
  user,
  allExpense,
  setAllExpense,
}) {
  const { id } = useParams();
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [participant, setParticipant] = useState([]);

  const addMember = (member) => {
    if (participant.includes(member)) {
      setParticipant(participant.filter((item) => item.name !== member.name));
      return;
    }
    setParticipant((previous) => {
      return [...previous, member];
    });
  };
  const expensedata = {
    id,
  };
  const createExpense = async (e) => {
    e.preventDefault();
    const data = {
      expenseName: expenseName,
      amount: amount,
      upiId: upiId,
      participants: participant,
      groupId: id,
    };
    if (expenseName === "") {
      return toast.error("Expanse name can't be Empty");
    } else if (!amount.match(/-?\d+(\.\d+)?/)) {
      return toast.error("Fill the Expanse  Amount");
    } else if (participant.length === 0) {
      return toast.error("Select Atleast one");
    } else {
      const response = await fetch(
        "https://bills-splitter-backend.onrender.com/createExpense",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.success === false) {
        toast.error(result.response);
      } else {
        getExpense(expensedata, setAllExpense);
        setExpenseName("");
        setAmount("");
        setUpiId("");
        setParticipant([]);
        toast.success(result.response);
      }
    }
  };
  return (
    <>
      <section
        className=" flex gap-6 max-[550px]:flex-col items-start 
      max-[550px]:mt-4  select-none"
      >
        <ExpanseStruc
          addExpense={addExpense}
          user={user}
          allExpense={allExpense}
        />
        {/* addExpanse form */}
        <div
          className={`w-[38%] max-[600px]:w-[90%] max-[950px]:w-[55%] bg-white shadow-black  drop-shadow-lg
          rounded-lg mt-14  max-[950px]:absolute max-[950px]:translate-y-[-50%]
           overflow-hidden top-[50%] duration-500
           ${
             addExpense
               ? " max-[950px]:block max-[950px]:left-[50%] max-[950px]:translate-x-[-50%] z-50"
               : " max-[950px]:left-[-100%]"
           }
         `}
        >
          <h1 className="text-center bg-[#f3f3f3] py-2.5 font-semibold text-[#181818]">
            Add an Expense
          </h1>
          <form className=" flex flex-col px-3 mt-4 gap-2.5  mb-3">
            <label htmlFor="expenseName">Expense Name</label>
            <input
              type="text"
              className="bg-[#f1f1f1] px-2.5 py-1.5 rounded-md w-full outline-[#B6D7FA]"
              placeholder="Expense name"
              id="expenseName"
              value={expenseName}
              onChange={(e) => setExpenseName(e.currentTarget.value)}
            />
            <label htmlFor="amount">Amount</label>
            <input
              className="bg-[#f1f1f1] px-2.5 py-1.5 rounded-md w-full outline-[#B6D7FA]"
              type="text"
              placeholder="Amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <label htmlFor="upiId">UPI ID (optional)</label>
            <input
              type="text"
              className="bg-[#f1f1f1] px-2.5 py-1.5 rounded-md w-full outline-[#B6D7FA]"
              placeholder="UPI ID"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.currentTarget.value)}
            />
            <div className="capitalize ">
              <h1>member involved</h1>
              <p className=" text-sm tracking-wide text-gray-400 ">
                Bydefault you are add in this expense .
              </p>
              <div className={`grid grid-cols-2  gap-y-2 mt-3`}>
                {Member.member?.map((member, index) => {
                  return (
                    <div
                      key={index}
                      className={`cursor-pointer flex gap-2 items-center mt-[-3px] 
                      ${user.email === member.email ? "hidden" : "block"}`}
                      onClick={() => addMember(member)}
                    >
                      <div className="items-center">
                        {participant.includes(member) ? (
                          <RiCheckboxLine className="text-lg text-gray-500" />
                        ) : (
                          <RiCheckboxBlankLine className="text-lg text-gray-500" />
                        )}
                      </div>
                      <span>{member.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full text-white font-Roboto py-1.5 mt-2 tracking-wide rounded-lg"
              onClick={(e) => createExpense(e)}
            >
              Add Expense
            </button>
            <hr className=" max-[950px]:block hidden" />
          </form>
          <button
            type="button"
            onClick={() => setAddExpens(false)}
            className=" bg-[#181818] text-white font-serif tracking-wider px-2 
            py-1 rounded-lg float-right  mb-3 mr-3 max-[950px]:block hidden"
          >
            Close
          </button>
        </div>
        <div
          onClick={() => setAddExpens(true)}
          className="hidden max-[950px]:block fixed cursor-pointer text-4xl font-bold text-purple-700 bottom-7 right-5"
        >
          <AiOutlinePlusCircle />
        </div>
        <Toaster />
      </section>
    </>
  );
}

export default Expense;
