import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import deleteGroup from "./deleteGroup";
import toast from "react-hot-toast";

const groupStucture = (member, index, image, user, navigation) => {
  const getTime = (id) => {
    const timestamp = new Date(id);
    const hours = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${String(minutes).padStart(2, "0")} ${amOrPm}`;
  };
  return (
    <div
      className=" drop-shadow-2xl flex bg-white p-3 mt-2 max-[550px]:w-full
        justify-between items-center rounded-xl shadow-md shadow-black cursor-pointer"
      key={index}
    >
      <Link to={`/groupdetails/${member._id}`}>
        <div className=" flex items-center gap-3">
          <div className="w-14 h-14 object-cover rounded-full overflow-hidden">
            {image.map((img, index) => {
              if (member.groupType === img.name) {
                return (
                  <img
                    src={img.Image}
                    alt={img.name}
                    className=" w-full h-full"
                    key={index}
                  />
                );
              } else {
                return "";
              }
            })}
          </div>
          <div>
            <h1 className="text-lg text-[#19194b] capitalize tracking-wide font-semibold">
              {member.groupName}
            </h1>
            <p className="text-xs max-[550px]:hidden">
              Created by
              <span className=" capitalize text-purple-600 ml-1">
                {member.member.map((creater) => {
                  if (member.createrId === creater.email) {
                    return creater.name;
                  } else {
                    return "";
                  }
                })}
              </span>
            </p>
          </div>
        </div>
      </Link>
      <section className="flex gap-5">
        <div className="flex flex-col-reverse gap-2">
          <p className="text-xs text-center ">
            {member.time.split(" ")[2] +
              " " +
              member.time.split(" ")[1] +
              " " +
              member.time.split(" ")[3]}
          </p>
          <p className="text-xs text-center">{getTime(member.time)}</p>
        </div>
        <button
          className={`bg-gray-300 rounded-lg drop-shadow-lg
                   shadow-black p-1 max-[550px]:hidden 
                   ${member.createrId === user.email ? "block" : "hidden"}`}
          onClick={() => deleteGroup(member._id, navigation, toast)}
        >
          <MdOutlineDeleteOutline className="text-red-500 text-xl" />
        </button>
      </section>
    </div>
  );
};

export default groupStucture;
