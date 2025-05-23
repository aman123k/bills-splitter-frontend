import React, { useContext } from "react";
import Header from "../component/Header";
import Slider from "../component/Slider";
import { GroupContext } from "../context/global";
import { Link } from "react-router-dom";
import GroupCard from "../component/groupScreenComponents/GroupCard";
import useGetAPIRequest from "../customHook/useGetAPIRequest";
import { GET_GROUPS } from "../queryKeys/QueryKeys";
import NotFound from "../component/NotFound";

function Home() {
  const { openGroupPopUp } = useContext(GroupContext);
  const { data: displayGroups } = useGetAPIRequest(
    "/getGroup",
    "/login",
    GET_GROUPS("/getGroup", "/login")
  );

  return (
    <section className="bg-[#F9FAFB]">
      <div className={` ${openGroupPopUp ? "h-screen overflow-hidden" : ""}`}>
        <Header />

        {/* Groups Section */}
        <section className="min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%] max-[650px]:mb-24">
          <Slider />
          <div className=" grid grid-cols-3 gap-10 py-4 px-24 max-[1250px]:gap-6  max-[650px]:grid-cols-2 max-[650px]:gap-4 max-[1250px]:px-14 max-[950px]:px-10 max-[650px]:px-4 max-[650px]:py-3.5">
            <div className="bg-green-50 px-6 py-4 flex flex-col gap-2.5 max-[650px]:gap-1.5 rounded-xl drop-shadow-md">
              <p className="text-[14px] text-[#6B7280]">You are owed</p>
              <p className="text-2xl font-bold text-green-600 ">$248.35</p>
              <p className="text-xs text-[#6B7280] -mt-1">From 3 people</p>
            </div>

            <div className="bg-red-50 px-6 py-4 flex flex-col gap-2.5 max-[650px]:gap-1.5 rounded-xl drop-shadow-md">
              <p className="text-[14px] text-[#6B7280]">You owe</p>
              <p className="text-2xl font-bold text-red-600 ">$248.35</p>
              <p className="text-xs text-[#6B7280] -mt-1">From 3 people</p>
            </div>

            <div className="bg-blue-50 px-6 py-4 flex flex-col gap-2.5 max-[650px]:gap-1.5 rounded-xl drop-shadow-md">
              <p className="text-[14px] text-[#6B7280]">Total balance</p>
              <p className="text-2xl font-bold text-blue-600 ">$248.35</p>
              <p className="text-xs text-[#6B7280] -mt-1">Across all groups</p>
            </div>
          </div>

          <div className=" py-4 px-24 max-[1250px]:gap-6 max-[1250px]:px-14 max-[950px]:px-10 max-[650px]:px-4 max-[650px]:py-3.5 max-[650px]:gap-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 font-Nunito">
                Recent Activity
              </h2>
              <Link to="/activity">
                <button className="text-green-600 text-sm font-medium hover:underline">
                  View all
                </button>
              </Link>
            </div>

            <div className="space-y-3 max-[650px]:space-y-4">
              <div className="flex items-center justify-between p-3 max-[650px]:p-0 max-[650px]:gap-6 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Dinner at Olive Garden</p>
                    <p className="text-sm text-gray-500">
                      Paid by Alex • NYC Trip
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-red-600">You owe $32.50</p>
                  <p className="text-sm text-gray-500">Today, 7:45 PM</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 max-[650px]:p-0 max-[650px]:gap-6 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Sarah paid you</p>
                    <p className="text-sm text-gray-500">
                      Via Venmo • Apartment
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-600">
                    You received $85.00
                  </p>
                  <p className="text-sm text-gray-500">Yesterday, 2:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" py-4 px-24 max-[1250px]:gap-6 max-[1250px]:px-14 max-[950px]:px-10 max-[650px]:px-4 max-[650px]:py-3.5 max-[650px]:gap-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 font-Nunito">
                Your Groups
              </h2>
              <Link to="/groups">
                <button className="text-green-600 text-sm font-medium hover:underline">
                  View all
                </button>
              </Link>
            </div>
            {!displayGroups?.data ? (
              <NotFound message="No groups found. Try creating or joining one!" />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-[650px]:gap">
                {displayGroups?.data && displayGroups?.data.length
                  ? displayGroups?.data?.slice(0, 2).map((data, index) => {
                      return <GroupCard data={data} key={index} />;
                    })
                  : ""}
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
export default Home;
