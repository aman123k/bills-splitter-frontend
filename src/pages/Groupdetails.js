import React, { useCallback, useContext, useEffect, useState } from "react";
import Header from "../component/Header";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";

import { useNavigate, useParams } from "react-router-dom";
import GroupType from "../data/GroupType";
import Expense from "../component/expanse/Expense";
import Balance from "../component/expanse/Balance";
import getExpense from "../component/expanse/GetExpense";
import deleteGroup from "../component/group/deleteGroup";
import { ThemeContext } from "../context/global";

function Groupdetails() {
  const { id } = useParams();
  const [slide, setSlide] = useState("Expense");
  const [addExpense, setAddExpens] = useState(false);
  const [Member, setMember] = useState([]);
  const [user, setUser] = useState([]);
  const [image, setImage] = useState([]);
  const [allExpense, setAllExpense] = useState([]);
  const { settlement } = useContext(ThemeContext);
  const navigation = useNavigate();

  const changer = (e) => {
    const mover = document.querySelector("#mover");
    if (e.innerText === "Expense") {
      setSlide("Expense");
      mover.style.left = "0";
    } else if (e.innerText === "Balance") {
      mover.style.left = "5.7rem";
      setSlide("Balance");
    }
  };
  const getGroupMembers = useCallback(async () => {
    try {
      const response = await fetch(
        "https://bills-splitter-backend.onrender.com/getGroupMembers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ id: id }),
        }
      );
      const result = await response.json();

      if (result.success === false) {
        window.location.href = "/";
        return;
      }
      const groupImage = result.response.map((image) => {
        return GroupType.find((img) => {
          return img.name === image.groupType;
        });
      });
      setImage(groupImage);
      setMember(result.response[0]);
      setUser(result.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [id]);
  useEffect(() => {
    getExpense({ id: id }, setAllExpense);
    getGroupMembers();
  }, [id, getGroupMembers]);
  let participant = Member.member?.length;
  return (
    <section
      className={`min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%] ${
        addExpense || settlement !== "" ? "h-screen overflow-hidden" : ""
      }`}
    >
      <Header />
      <section className=" max-[550px]:block hidden bg-orange-200 px-5 mt-5 py-3">
        <header className=" flex justify-between items-center ">
          <div className=" items-center flex gap-2">
            {image?.map((img, index) => {
              if (Member.groupType === img.name) {
                return (
                  <img
                    src={img.Image}
                    alt={img.name}
                    className=" w-10 object-cover  h-10 rounded-full"
                    key={index}
                  />
                );
              } else {
                return "";
              }
            })}
            <div className="capitalize">
              <h1 className=" font-bold font-Nunito tracking-wide">
                {Member.groupName}
              </h1>
              <p className=" text-sm">
                Created by{" "}
                <span className="text-purple-600">
                  {Member.createrId === user.email
                    ? "you"
                    : Member.member[participant - 1]?.name}
                </span>
              </p>
            </div>
          </div>
          <div
            className={` bg-white text-xl text-red-500 rounded-lg p-1
          ${user.email === Member.createrId ? "block" : "hidden"}`}
            onClick={() => deleteGroup(Member._id, navigation, toast)}
          >
            <MdOutlineDeleteOutline />
          </div>
        </header>
      </section>

      <div className="pt-5">
        <ul
          className="flex gap-6 justify-center bg-[#f3f3f3] w-max ml-[50%] select-none items-center
         shadow-lg translate-x-[-50%] py-1.5  px-3 font-Nunito rounded-2xl relative overflow-hidden"
        >
          <li
            id="mover"
            className="absolute top-0 -z-10 bg-[#3e0f96] w-[5.3rem] 
           ease-in-out duration-200 rounded-2xl h-full left-0"
          ></li>
          <li
            onClick={(e) => changer(e.currentTarget)}
            className={`cursor-pointer text-center w-[4.1rem] text-[15px] tracking-wide
            ${
              slide === "Expense"
                ? " text-white font-normal"
                : "text-[#3e0f96] font-semibold"
            }  `}
          >
            Expense
          </li>
          <li
            onClick={(e) => changer(e.currentTarget)}
            className={`cursor-pointer text-center tracking-wide w-16 text-[15px]  
            ${
              slide === "Balance"
                ? " text-white font-normal"
                : "text-[#3e0f96] font-semibold"
            } 
           `}
          >
            Balance
          </li>
        </ul>
      </div>

      {(() => {
        if (slide === "Expense") {
          return (
            <>
              <Expense
                addExpense={addExpense}
                setAddExpens={setAddExpens}
                Member={Member}
                user={user}
                allExpense={allExpense}
                setAllExpense={setAllExpense}
              />
            </>
          );
        } else {
          return (
            <>
              <Balance allExpense={allExpense} user={user} />
            </>
          );
        }
      })()}
      <Toaster />
    </section>
  );
}

export default Groupdetails;
