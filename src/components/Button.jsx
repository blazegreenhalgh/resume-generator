import React from "react";

function Button({ type, onClick, classes, children }) {
  const baseClasses = "w-fit px-4 py-2 rounded-md cursor-pointer text-sm ";
  const typeClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    neutral: "bg-gray-300 hover:bg-gray-400 text-white",
  };

  return (
    <button
      className={`${baseClasses} ${typeClasses[type] || typeClasses["neutral"]} ${classes}`}
      onClick={onClick}
    >
      <span className="inline-flex justify-center gap-1">{children}</span>
    </button>
  );
}

export default Button;
