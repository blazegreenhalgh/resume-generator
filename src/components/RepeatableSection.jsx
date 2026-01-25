import React from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

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
          contents={"+ " + title}
          onClick={() => addRepeatableForm(arrayPath)}
          classes="w-full"
        />
      </div>
    </>
  );
}

export default RepeatableSection;
