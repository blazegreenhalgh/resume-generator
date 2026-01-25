import React from "react";
import Dropdown from "./Dropdown";
import Button from "./button";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

function RepeatableSection({
  title = "title",
  array,
  arrayPath,
  updateRepeatableForm,
  addRepeatableForm,
  deleteRepeatableForm,
}) {
  const icon =
    title === "Experience" ? (
      <BriefcaseIcon className="h-7 w-7" />
    ) : (
      <AcademicCapIcon className="h-7 w-7" />
    );
  return (
    <>
      <div className="section-wrapper flex flex-col gap-4">
        {icon}
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="loop-wrapper flex w-full flex-col gap-2">
          {array.map((object, index) => {
            return (
              <Dropdown
                key={index}
                array={array}
                object={object}
                arrayPath={arrayPath}
                updateRepeatableForm={updateRepeatableForm}
                deleteRepeatableForm={deleteRepeatableForm}
              />
            );
          })}
        </div>
        <Button
          type="primary"
          onClick={() => addRepeatableForm(arrayPath)}
          classes="w-full flex justify-center"
        >
          <PlusIcon className="h-[1.2em] w-[1.2em] self-center" />
          {title}
        </Button>
      </div>
    </>
  );
}

export default RepeatableSection;
