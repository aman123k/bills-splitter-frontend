import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import GroupType from "../data/GroupType";
import expense from "../images/expense.jpg";
import payment from "../images/payment.png";
import Activityhelper from "../component/expanse/helper/Activity";

function Activity() {
  const [activitys, setActivitys] = useState([]);
  const [user, setUser] = useState([]);
  const [image, setImage] = useState([]);
  const getAllactivitys = async () => {
    const response = await fetch(
      "https://bills-splitter-backend.onrender.com/activitys",
      {
        credentials: "include",
      }
    );
    const result = await response.json();
    if (result.success) {
      const groupImage = result.response.map((image) => {
        return GroupType.find((img) => {
          if (image.groupType === "expense") {
            return [{ name: "expense", Image: expense }];
          } else if (image.groupType === "payment") {
            return [{ name: "payment", Image: payment }];
          } else {
            return img.name === image.groupType;
          }
        });
      });
      setImage(groupImage);
      setActivitys(result.response);
      setUser(result.data);
    } else {
      window.location.href = "/login";
    }
  };

  useEffect(() => {
    getAllactivitys();
  }, []);

  const getTime = (id) => {
    const timestamp = new Date(id);
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${String(minutes).padStart(2, "0")} ${amOrPm}`;
  };

  return (
    <section className="min-[1600px]:w-[1400px]  min-[1600px]:mx-[50%] min-[1600px]:translate-x-[-50%] mb-4">
      <Header />
      <h1
        className=" capitalize border-b mx-5 pb-3 mt-5 text-lg 
       text-[#181818] font-Nunito font-semibold "
      >
        My all activity
      </h1>
      <section
        className={` mx-5 mt-5 gap-x-4 gap-y-4  
      ${
        activitys.length !== 0 ? "grid grid-cols-2 max-[550px]:grid-cols-1" : ""
      }
      `}
      >
        {activitys.length !== 0 ? (
          [...activitys].reverse().map((activity, index) => {
            return (
              <section
                className=" drop-shadow-2xl flex bg-white p-3  max-[550px]:w-full
                    justify-between items-center rounded-xl shadow-md shadow-black"
                key={index}
              >
                <section className=" flex gap-2 items-center">
                  <div className="w-14 h-14 object-cover rounded-full overflow-hidden">
                    {image.map((img, index) => {
                      if (activity.groupType === img.name) {
                        return (
                          <img
                            src={img.Image}
                            alt={img.name}
                            className="w-full h-full"
                            key={index}
                          />
                        );
                      } else if (
                        activity.groupType !== img.name &&
                        activity.groupType === "expense"
                      ) {
                        return (
                          <img
                            src={expense}
                            alt="expense"
                            className="w-full h-full"
                            key={index}
                          />
                        );
                      } else if (
                        activity.groupType !== img.name &&
                        activity.groupType === "payment"
                      ) {
                        return (
                          <img
                            src={payment}
                            alt="expense"
                            className="w-full h-full"
                            key={index}
                          />
                        );
                      } else {
                        return "";
                      }
                    })}
                  </div>

                  <div className=" text-sm ">
                    {activity.eventCreater[0].email === user.email ? (
                      <p className="text-[#19194b] capitalize font-semibold">
                        you {activity.eventMessage}
                      </p>
                    ) : (
                      <p className="text-[#19194b]  capitalize font-semibold">
                        {activity.eventCreater[0].name} {activity.eventMessage}
                      </p>
                    )}
                  </div>
                </section>
                <div className="flex flex-col-reverse gap-2 w-28">
                  <p className="text-xs text-center ">
                    {activity.time.split(" ")[2] +
                      " " +
                      activity.time.split(" ")[1] +
                      " " +
                      activity.time.split(" ")[3]}
                  </p>
                  <p className="text-xs text-center">
                    {getTime(activity.time)}
                  </p>
                </div>
              </section>
            );
          })
        ) : (
          <Activityhelper />
        )}
      </section>
    </section>
  );
}

export default Activity;
