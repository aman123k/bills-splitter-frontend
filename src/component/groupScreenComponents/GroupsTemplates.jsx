import React from "react";
import { groupTemplates } from "../../data/GroupType";

function GroupsTemplates() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-gray-800 font-Nunito max-[650px]:text-[1.45rem]">
        Suggested Group Templates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 ">
        {groupTemplates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-3xl mb-3">{template.icon}</div>
            <h3 className="font-bold text-gray-800 mb-1 font-Nunito">
              {template.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{template.description}</p>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              Use template →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupsTemplates;
