import React from "react";
import { useState } from "react";
import RepeatableForm from "../RepeatableForm";

function Dropdown({ array, arrayPath = "", updateRepeatableForm }) {
  const [isToggled, setIsToggled] = useState(false);
  const title = "New Item";

  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  // default state
  if (!isToggled) {
    return (
      <div className="dropdown-wrapper relative w-full bg-gray-50 p-4 border border-gray-200">
        <button
          onClick={handleClick}
          className="cursor-pointer w-full after:absolute after:inset-0"
        >
          <div className="flex flex-row justify-between w-full">
            <h2>{title}</h2>
            <p>V</p>
          </div>
        </button>
      </div>
    );
  }
  // opened state
  return (
    <div className="dropdown-wrapper relative w-full flex flex-col bg-gray-50 p-4 border border-gray-200">
      <div className="button-wrapper relative w-full pb-6">
        <button
          onClick={handleClick}
          className="cursor-pointer w-full after:absolute after:inset-0"
        >
          <div className="flex flex-row justify-between w-full">
            <h2>{title}</h2>
            <p>^</p>
          </div>
        </button>
      </div>
      <RepeatableForm
        array={array}
        arrayPath={arrayPath}
        updateRepeatableForm={updateRepeatableForm}
      />
    </div>
  );
}

export default Dropdown;
