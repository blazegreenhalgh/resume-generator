import React from "react";
import { useState, useEffect } from "react";
import RepeatableForm from "./RepeatableForm";
import Button from "./Button";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

function Dropdown({
  object,
  array,
  arrayPath = "",
  updateRepeatableForm,
  deleteRepeatableForm,
}) {
  const [isToggled, setIsToggled] = useState(false);
  let [title, setTitle] = useState("New Item");
  let obj = array.find((obj) => obj === object);
  useEffect(() => {
    const key = Object.values(obj)[1] ? Object.values(obj)[1] : "New Item";
    setTitle(key);
    //   console.log(title);
    console.log();
  }, [obj]);

  const handleClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div className="dropdown-wrapper relative flex w-full flex-col rounded-md border border-gray-200 p-4">
      <div className="inner-wrapper relative -mt-4 -mb-4 w-full gap-6 pt-4 pb-4">
        <button
          onClick={handleClick}
          className="w-full cursor-pointer after:absolute after:inset-0"
        >
          <div className="flex w-full flex-row items-center justify-between">
            <h2 className="font-semibold">{title}</h2>
            <span>
              {isToggled ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )}
            </span>
          </div>
        </button>
      </div>
      {isToggled ? (
        <div className="pt-6">
          <div className="form-wrapper flex flex-col gap-4">
            <RepeatableForm
              object={object}
              arrayPath={arrayPath}
              updateRepeatableForm={updateRepeatableForm}
            />
          </div>
          <div className="button-wrapper flex w-full items-end justify-end pt-4">
            <Button
              type="danger"
              onClick={(e) => deleteRepeatableForm(arrayPath, object.id)}
            >
              <TrashIcon className="h-[1em] w-[1em] self-center" />
              Delete Row
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
