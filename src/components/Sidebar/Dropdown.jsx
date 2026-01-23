import React from "react";
import { useState } from "react";
import RepeatableForm from "../RepeatableForm";
import Button from "../button";

function Dropdown({
  object,
  arrayPath = "",
  updateRepeatableForm,
  deleteRepeatableForm,
}) {
  const [isToggled, setIsToggled] = useState(false);
  const title = "New Item";

  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="dropdown-wrapper relative w-full flex flex-col gap-6 bg-gray-50 p-4 border border-gray-200 rounded-md">
      <div className="button-wrapper relative w-full -mt-4 pt-4 -mb-4 pb-4">
        <button
          onClick={handleClick}
          className="cursor-pointer w-full after:absolute after:inset-0"
        >
          <div className="flex flex-row justify-between w-full">
            <h2>{title}</h2>
            <p>{isToggled ? "^" : "V"}</p>
          </div>
        </button>
      </div>
      {isToggled ? (
        <div className="pb-4 flex flex-col">
          <RepeatableForm
            object={object}
            arrayPath={arrayPath}
            updateRepeatableForm={updateRepeatableForm}
          />
          <Button
            type="danger"
            contents="Delete Row"
            onClick={(e) => deleteRepeatableForm(arrayPath, object.id)}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
