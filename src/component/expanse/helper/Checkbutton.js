import React, { useContext } from "react";
import { GroupContext } from "../../../context/global";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GoCheckCircle } from "react-icons/go";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import deleteExpense from "../deleteExpense";

function Checkbutton({ allExpense, user }) {
  const { settlement, setSettlement } = useContext(GroupContext);
  const navigation = useNavigate();
  const checkSettlement = allExpense.filter((expense) => {
    if (settlement !== "") {
      return expense.expenseName === settlement;
    } else {
      return "";
    }
  });
  const deleteexpense = (_id, groupId, navigation, toast) => {
    deleteExpense(_id, groupId, navigation, toast);
    setTimeout(() => {
      setSettlement("");
    }, 1000);
  };
  return (
    <>
      <section
        className={`w-[38%] max-[600px]:w-[80%] max-[950px]:w-[55%] bg-white shadow-black  drop-shadow-lg
          rounded-lg mr-7  absolute translate-y-[-50%] px-3 py-2.5
           overflow-hidden top-[50%] duration-500
            ${
              settlement !== ""
                ? " left-[50%] translate-x-[-50%] z-50"
                : " left-[-100%]"
            }
         `}
      >
        <header className="flex justify-between items-center pb-2.5">
          <h1 className=" text-lg text-[#181818] font-semibold">
            {settlement}
          </h1>
          {checkSettlement[0]?.createrId === user.email ? (
            <button
              className={`bg-gray-300 rounded-lg drop-shadow-lg shadow-black p-1  `}
              onClick={() =>
                deleteexpense(
                  checkSettlement[0]?._id,
                  checkSettlement[0]?.groupId,
                  navigation,
                  toast
                )
              }
            >
              <MdOutlineDeleteOutline className="text-red-500 text-xl" />
            </button>
          ) : (
            <button onClick={() => setSettlement("")}>
              <RxCross2 className=" text-2xl" />
            </button>
          )}
        </header>
        <div className=" border-t pt-3">
          {checkSettlement[0]?.participants.map((participant, index) => {
            if (
              checkSettlement[0]?.createrId === user.email &&
              participant.email !== checkSettlement[0].createrId
            ) {
              return (
                <section key={index} className=" ">
                  <div className="flex items-center gap-2 mt-3.5">
                    <AiOutlinePlus className="text-green-700 text-lg font-semibold" />
                    <h1 className="capitalize">
                      {participant.name} will pay{" "}
                      {checkSettlement[0]?.createrId !== user.email
                        ? checkSettlement[0]?.participants[
                            checkSettlement[0]?.participants.length - 1
                          ].name
                        : "You"}{" "}
                      ₹
                      {Math.round(
                        checkSettlement[0]?.amount /
                          checkSettlement[0]?.participants.length
                      )}
                    </h1>
                    {participant.settlement === true ? (
                      <GoCheckCircle className=" text-green-600 text-2xl" />
                    ) : (
                      ""
                    )}
                  </div>
                </section>
              );
            } else if (
              checkSettlement[0]?.createrId !== participant.email &&
              participant.email === user.email
            ) {
              return (
                <section key={index} className=" mt-6">
                  <header className="flex items-center gap-2">
                    <AiOutlineMinus className="text-red-700 text-lg font-semibold" />
                    <h1 className="capitalize flex gap-1 ">
                      {checkSettlement[0]?.createrId === user.email
                        ? participant.name
                        : "You"}{" "}
                      have to pay ₹{" "}
                      {Math.round(
                        checkSettlement[0]?.amount /
                          checkSettlement[0]?.participants.length
                      )}{" "}
                      to{" "}
                      {
                        checkSettlement[0]?.participants[
                          checkSettlement[0]?.participants.length - 1
                        ].name
                      }
                    </h1>
                    {participant.settlement === true ? (
                      <GoCheckCircle className=" text-green-600 text-2xl" />
                    ) : (
                      ""
                    )}
                  </header>
                </section>
              );
            } else {
              return "";
            }
          })}
          <div className=" mt-6 capitalize text-sm border-b pb-6">
            <h1>
              Created by :{" "}
              {checkSettlement[0].createrId === user.email
                ? "You"
                : checkSettlement[0]?.participants[
                    checkSettlement[0]?.participants.length - 1
                  ].name}
            </h1>
            <p className=" text-gray-500 text-xs ">
              UPI ID : {checkSettlement[0]?.upiId}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSettlement("")}
            className=" bg-[#181818] text-white font-serif tracking-wider px-2 
                     py-1 rounded-lg mt-3 text-end float-right"
          >
            Close
          </button>
        </div>
      </section>
      <div className=" absolute w-screen top-0 h-screen z-10 bg-black opacity-40"></div>
    </>
  );
}

export default Checkbutton;
