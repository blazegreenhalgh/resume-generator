import React from "react";
import { useState } from "react";
import RepeatableForm from "./RepeatableForm";
import Button from "./button";

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
    <div className="dropdown-wrapper relative w-full flex flex-col bg-gray-50 p-4 border border-gray-200 rounded-md">
      <div className="inner-wrapper relative w-full gap-6 -mt-4 pt-4 -mb-4 pb-4">
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
        <div className="pt-4">
          <div className="form-wrapper flex flex-col gap-4">
            <RepeatableForm
              object={object}
              arrayPath={arrayPath}
              updateRepeatableForm={updateRepeatableForm}
            />
          </div>
          <div className="button-wrapper pt-4 flex w-full items-end justify-end">
            <Button
              type="danger"
              contents="Delete Row"
              onClick={(e) => deleteRepeatableForm(arrayPath, object.id)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
