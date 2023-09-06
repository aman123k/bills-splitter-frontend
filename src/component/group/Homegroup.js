import React, { useContext, useEffect, useState } from "react";
import { MdGroups2 } from "react-icons/md";
import CreateGroup from "./CreateGroup";
import getGroups from "./getGroup";
import groupStucture from "./groupStucture";
import { ThemeContext } from "../../context/global";
import { useNavigate } from "react-router-dom";

function Homegroup() {
  const { setOpen } = useContext(ThemeContext);
  const [members, setMembers] = useState([]);
  const [image, setImage] = useState();
  const [user, setUser] = useState({});
  const navigation = useNavigate();
  useEffect(() => {
    getGroups(setImage, setMembers, setUser);
  }, []);

  return (
    <section>
      <section className={` flex max-[550px]:flex-col gap-4 px-5 mt-6`}>
        <div className=" w-[80%] max-[550px]:w-full">
          <p className="border-b-2 w-[90%] max-[550px]:w-full pb-6 tracking-wide">
            Group are perfect for apartment, trip and other situation where the
            same set of people share a large number of expense
          </p>
          <p className="my-4 w-[90%] max-[550px]:w-full">
            If you have travelled recently, and worried about expense split,
            create a Group and start splitting 😊
          </p>
          <button
            onClick={() => setOpen(true)}
            className=" bg-blue-600 text-white font-Nunito py-1.5 px-2 rounded-xl "
          >
            Create Group <span className=" font-bold text-xl">+</span>
          </button>
        </div>
        <div className="mb-3 min-w-[380px] max-[550px]:min-w-0">
          <div
            className=" flex items-center border-b-2 text-2xl text-[#000] font-Roboto
           tracking-wide pb-4 gap-1"
          >
            <h1> Visit your Group</h1> <MdGroups2 className="text-2xl" />
          </div>
          {members.length === 0 ? (
            <div>
              <p className="my-4">
                You are not a part of any group currently. Create a group and
                start Splitting
              </p>
              <button
                className=" bg-blue-600 text-white font-Roboto
                 py-1 px-2 rounded-xl  flex items-center gap-1"
                onClick={() => setOpen(true)}
              >
                <p className="text-sm tracking-wider"> Create Group</p>
                <span className=" text-xl">+</span>
              </button>
            </div>
          ) : (
            <div>
              <h1
                className=" my-3 text-lg font-semibold text-[#181818]
                  border-b pb-2 font-Nunito"
              >
                Reacent Group
              </h1>
              {[...members].reverse().map((member, index) => {
                if (index <= 2) {
                  return groupStucture(member, index, image, user, navigation);
                } else {
                  return null;
                }
              })}
            </div>
          )}
        </div>
      </section>
      <CreateGroup
        setImage={setImage}
        setMembers={setMembers}
        setUser={setUser}
      />
    </section>
  );
}

export default Homegroup;
