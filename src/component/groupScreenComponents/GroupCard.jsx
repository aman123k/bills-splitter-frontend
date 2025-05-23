import React from "react";
import { groupTemplates } from "../../data/GroupType";
import { useNavigate } from "react-router-dom";

function GroupCard({ data }) {
  const template = groupTemplates.find((item) => item.name === data.groupType);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={() => navigate(`/expenseDetails/${data._id}`)}
    >
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full ${template?.bgColor} flex items-center justify-center mr-3`}
          >
            <span className={`${template?.textColor} font-medium`}>
              {template?.icon}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{data?.groupName}</h3>
            <p className="text-sm text-gray-500">
              {data?.member?.length} members
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-600">Total expenses</p>
          <p className="font-bold text-gray-800">$842.30</p>
        </div>
      </div>
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-1 bg-green-500 rounded-full"
          style={{ width: "65%" }}
        ></div>
      </div>
      <div className="mt-3 flex justify-between text-xs text-gray-500">
        <span>5 settled expenses</span>
        <span>3 unsettled expenses</span>
      </div>
    </div>
  );
}

export default GroupCard;
