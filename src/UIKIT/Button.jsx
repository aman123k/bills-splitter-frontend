import React from "react";
import { FaPlus } from "react-icons/fa6";

function Button({ type, onClick, label, customStyle, isPlus }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-medium py-2 font-Nunito items-center gap-1.5 rounded-lg ${customStyle}`}
    >
      {isPlus && <FaPlus />}
      {label}
    </button>
  );
}

export default Button;
