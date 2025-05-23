import React from "react";
import { FaPlus } from "react-icons/fa6";

function InputField({ label, value, setValue, isPlus }) {
  return (
    <div className=" flex flex-col gap-2.5 max-[650px]:gap-2">
      <label className="block text-sm font-medium text-[#6B7280] ">
        {label}
      </label>
      <div className="flex items-center px-3 py-2 border border-gray-300 rounded-lg">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          className="w-full  outline-none"
          placeholder="e.g. Member Email"
        />
        {isPlus && (
          <FaPlus
            size={16}
            stroke="currentColor"
            className="ml-2 text-blue-600"
          />
        )}
      </div>
    </div>
  );
}

export default InputField;
