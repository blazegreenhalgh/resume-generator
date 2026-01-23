import React from "react";

function Button({ type, contents = "Button", onClick }) {
  const baseClasses = "w-fit px-4 py-2 rounded-md cursor-pointer";
  const typeClasses = {
    primary: "bg-sky-500 hover:bg-sky-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    neutral: "bg-gray-300 hover:bg-gray-400 text-white",
  };

  return (
    <button
      className={`${baseClasses} ${typeClasses[type] || typeClasses["neutral"]}`}
      onClick={onClick}
    >
      {contents}
    </button>
  );
}

export default Button;
