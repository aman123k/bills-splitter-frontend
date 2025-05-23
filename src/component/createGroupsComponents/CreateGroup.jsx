import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { GroupContext } from "../../context/global";

// icons
import { RxCross2 } from "react-icons/rx";
import InputField from "../../UIKIT/InputField";
import Button from "../../UIKIT/Button";
import GroupTypeSelector from "./GroupTypeSelector";
import { GROUP_MESSAGE } from "../../constants/constants";
import usePostAPIRequest from "../../customHook/usePostAPIRequest";
import useGetAPIRequest from "../../customHook/useGetAPIRequest";
import { GET_USER_INFORMATION } from "../../queryKeys/QueryKeys";
import GeneralAvatar from "../../generalAvatar/GeneralAvatar";

function CreateGroup() {
  const { openGroupPopUp, setOpenGroupPopUp } = useContext(GroupContext);
  const [groupName, setGroupName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [groupType, setGroupType] = useState("");
  const { mutateAsync } = usePostAPIRequest(["GET_GROUPS"]);
  const { data: userInformation } = useGetAPIRequest(
    "/getUserInfomation",
    "/login",
    GET_USER_INFORMATION("/getGroup", "/login")
  );

  const [groupMember, setGroupMember] = useState([]);

  const addMember = () => {
    if (!name) {
      return toast.error(GROUP_MESSAGE.NAME);
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
      return toast.error(GROUP_MESSAGE.EMAIL);
    }
    const otherMumberDetais = {
      name: name,
      email: email,
      settlement: false,
    };
    setGroupMember((previous) => {
      return [...previous, otherMumberDetais];
    });
    setEmail("");
    setName("");
  };
  const deleteGroupMember = (name) => {
    const deletedMumber = groupMember.filter((mumber) => {
      return mumber.name !== name;
    });
    setGroupMember(deletedMumber);
  };
  const createGroup = async (e) => {
    e.preventDefault();
    if (!groupName) {
      return toast.error(GROUP_MESSAGE?.EMPTY_NAME);
    } else if (groupMember.length === 0) {
      return toast.error(GROUP_MESSAGE?.NO_MEMBERS);
    } else if (groupType === "") {
      return toast.error(GROUP_MESSAGE?.NO_TYPE_SELECTED);
    } else {
      const data = {
        groupName: groupName,
        member: groupMember,
        groupType: groupType,
      };
      const path = "/createGroup";
      const response = await mutateAsync({ path, data });
      if (response?.status) {
        setGroupName("");
        setGroupMember([]);
        setGroupType("");
        setOpenGroupPopUp(false);
      }
    }
  };
  return (
    <>
      <section
        className={`${openGroupPopUp ? "block overflow-hidden" : "hidden"}`}
      >
        <div className=" absolute  top-0 w-screen h-screen bg-[#000] z-50 opacity-30"></div>

        <form
          className=" bg-[#fff] w-[500px] z-50 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]
         p-6 rounded-xl drop-shadow-md max-[650px]:w-[90%] max-h-[90%] overflow-y-scroll"
        >
          {/* header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[20px] font-bold text-[#222222] font-Nunito">
              Create a New Group
            </h2>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setOpenGroupPopUp(false)}
            >
              <RxCross2
                stroke="currentColor"
                fill="none"
                size={24}
                strokeWidth={0.2}
              />
            </button>
          </div>

          <section className=" flex flex-col gap-4 max-[650px]:gap-2.5">
            <InputField
              label="Group Name"
              value={groupName}
              setValue={setGroupName}
              isPlus={false}
            />
            <GroupTypeSelector type={groupType} setType={setGroupType} />

            <h3 className="block text-[16px] font-medium text-[#6B7280] -mb-1">
              Add Members
            </h3>

            {/* Added Group Member */}
            {groupMember.length === 0 ? null : (
              <div className=" w-max flex gap-2.5 overflow-x-scroll -mb-2 max-[650px]:my-1.5">
                {groupMember.map((details, index) => {
                  return (
                    <div
                      className="bg-blue-600 shadow text-[#fff] font-medium font-Nunito px-2.5 py-1 rounded-md hover:bg-red-500 cursor-pointer"
                      key={index}
                      onClick={() => deleteGroupMember(details.name)}
                    >
                      {details.name}
                    </div>
                  );
                })}
              </div>
            )}
            {/* Name */}
            <InputField
              label="Name"
              value={name}
              setValue={setName}
              isPlus={true}
            />
            {/* Email */}
            <InputField
              label="Email"
              value={email}
              setValue={setEmail}
              isPlus={true}
            />
            <div className=" flex flex-col gap-2.5 max-[650px]:gap-2">
              <div className="flex justify-end">
                <Button
                  type="button"
                  label="Add Member"
                  customStyle="w-max bg-[#3C82F6] text-[14px] gap-1.5 flex px-2.5 text-[#fff] hover:bg-blue-700"
                  onClick={addMember}
                  isPlus={true}
                />
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex items-center">
                  <GeneralAvatar
                    height={40}
                    width={40}
                    name={userInformation?.data?.name}
                  />
                  <span className="ml-2 text-sm font-medium">You (Owner)</span>
                </div>
                <span className="text-gray-500 text-sm">
                  {userInformation?.data?.email}
                </span>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                type="button"
                label="Cancel"
                customStyle="bg-gray-100 gap-1.5 flex-1 text-gray-700 hover:bg-blue-700 hover:bg-gray-200"
                onClick={() => setOpenGroupPopUp(false)}
                isPlus={false}
              />
              <Button
                type="button"
                label="Create Group"
                customStyle="flex-1 bg-blue-600 text-white hover:bg-blue-700"
                onClick={createGroup}
                isPlus={false}
              />
            </div>
          </section>
        </form>
      </section>
    </>
  );
}

export default CreateGroup;
