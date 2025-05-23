import React, { useContext } from "react";
import { TiGroup } from "react-icons/ti";
import Button from "../../UIKIT/Button";
import { GroupContext } from "../../context/global";

function GroupNotCreate() {
  const { setOpenGroupPopUp } = useContext(GroupContext);
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col items-center text-center py-8">
        <div className="bg-green-100 p-4 rounded-full mb-4">
          <TiGroup className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-xl font-bold font-Nunito text-gray-800 mb-2">
          You're not part of any groups yet
        </h3>
        <p className="text-gray-600 mb-4 font-Nunito max-w-md">
          Create your first group to start tracking shared expenses with
          friends, roommates, or travel buddies.
        </p>
        <Button
          label="Create Your First Group"
          isPlus={true}
          onClick={() => setOpenGroupPopUp(true)}
          customStyle="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        />
      </div>
    </div>
  );
}

export default GroupNotCreate;
