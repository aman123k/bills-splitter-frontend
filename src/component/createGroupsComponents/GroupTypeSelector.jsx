import React from "react";
import { groupTemplates } from "../../data/GroupType";

function GroupTypeSelector({ type, setType }) {
  return (
    <div className=" flex flex-col gap-2.5 max-[650px]:gap-2">
      <label className="block text-sm font-medium text-[#6B7280] ">
        Group Type
      </label>
      <div className="flex gap-3 overflow-x-auto">
        {groupTemplates.map((template) => (
          <div
            key={template.id}
            className={`flex-shrink-0 border border-gray-300 rounded-lg p-3 text-center cursor-pointer 
            min-w-[105px] max-[650px]:p-2 max-[650px]:min-w-[90px]
          ${
            type === template.name
              ? "bg-blue-50 border-blue-500"
              : "hover:bg-blue-50 hover:border-blue-500"
          }`}
            onClick={() => setType(template?.name)}
          >
            <div className="text-2xl mb-1 max-[650px]:mb-0.5">
              {template.icon}
            </div>
            <div className="text-[14px] font-Nunito font-medium max-[650px]:text-[12px]">
              {template.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupTypeSelector;
