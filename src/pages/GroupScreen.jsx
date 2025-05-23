import React, { useContext, useEffect, useState } from "react";
import Header from "../component/Header";
import GroupCard from "../component/groupScreenComponents/GroupCard";
import GroupsTemplates from "../component/groupScreenComponents/GroupsTemplates";
import GroupIllustration from "../component/groupScreenComponents/GroupIllustration";

import { GroupContext } from "../context/global";
import { categories } from "../data/GroupType";

// icons
import { IoSearch } from "react-icons/io5";
import useGetAPIRequest from "../customHook/useGetAPIRequest";
import GroupNotCreate from "../component/groupScreenComponents/GroupNotCreate";
import { GET_GROUPS } from "../queryKeys/QueryKeys";

function GroupScreen() {
  const { data: displayGroups, isLoading } = useGetAPIRequest(
    "/getGroup",
    "/login",
    GET_GROUPS("/getGroup", "/login")
  );

  const { openGroupPopUp } = useContext(GroupContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all groups");
  const [filterGroups, setFilterGroups] = useState(displayGroups?.data);

  useEffect(() => {
    setFilterGroups(displayGroups?.data);
  }, [displayGroups]);
  const handleSearchGroup = () => {
    const newGroups = displayGroups?.data?.filter((val) =>
      val.groupName.toLocaleLowerCase().includes(searchQuery.toString())
    );
    if (newGroups.length) setFilterGroups(newGroups);
  };
  return (
    <section
      className={` bg-[#F9FAFB] pb-24
       ${openGroupPopUp ? "h-screen overflow-hidden" : ""}`}
    >
      <Header />
      <section
        className="min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%]
      max-[1250px]:px-14 max-[950px]:px-10 max-[650px]:px-4 max-[650px]:py-3.5 py-4 px-24 
      flex flex-col gap-6"
      >
        {/* Illustration Section */}
        <GroupIllustration />
        {/* Groups Header */}
        <div className="flex items-center justify-between max-[650px]:gap-4 gap-6 max-[650px]:flex-col">
          <div className="flex gap-0.5 flex-col ">
            <h1 className="text-2xl font-bold text-gray-800 font-Nunito max-[650px]:text-[1.45rem]">
              Your Groups
            </h1>
            <p className="font-Roboto text-gray-500 max-[1250px]:text-[15px]">
              Create and manage groups for splitting expenses with people you
              share costs with
            </p>
          </div>
          <div className=" flex items-center gap-3.5 max-[1250px]:gap-2.5 max-[650px]:w-full">
            <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg  max-[650px]:w-full">
              <IoSearch
                size={18}
                stroke="currentColor"
                className="mr-2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search groups..."
                className="w-full  outline-none bg-transparent "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button
              onClick={handleSearchGroup}
              type="button"
              className="bg-[#3C82F6] w-max font-semibold font-Nunito flex items-center gap-1.5 py-2 px-2.5
                text-[#fff] rounded-lg hover:bg-blue-700 flex-shrink-0 max-[1250px]:text-[14px]"
            >
              Search Group
            </button>
          </div>
        </div>
        {/* Group Categories */}
        <div className="">
          <div className="flex overflow-x-auto py-2 gap-2 no-scrollbar">
            {categories.map((categorie) => {
              return (
                <button
                  key={categorie}
                  className={`px-6 py-2 rounded-full capitalize font-Nunito font-semibold
                   ${
                     selectedCategory === categorie
                       ? "bg-green-500 text-white"
                       : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                   } `}
                  onClick={() => setSelectedCategory(categorie)}
                >
                  {categorie}
                </button>
              );
            })}
          </div>
        </div>
        {isLoading ? (
          "loading"
        ) : filterGroups?.length <= 0 ? (
          <GroupNotCreate />
        ) : (
          <div className="rounded-3xl py-4 grid grid-cols-2 gap-6 drop-shadow-lg max-[650px]:grid-cols-1 max-[650px]:gap-4">
            {filterGroups && filterGroups.length
              ? filterGroups.map((data, index) => {
                  return <GroupCard data={data} key={index} />;
                })
              : ""}
          </div>
        )}

        {/* Group Templates */}
        <GroupsTemplates />
      </section>
    </section>
  );
}

export default GroupScreen;
