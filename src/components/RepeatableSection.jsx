import React from "react";
import Dropdown from "./Dropdown";
import Button from "./Button";

function RepeatableSection({
  title = "title",
  array,
  arrayPath,
  updateRepeatableForm,
  addRepeatableForm,
  deleteRepeatableForm,
}) {
  return (
    <>
      <div className="section-wrapper flex flex-col gap-4">
        <h2 className="font-bold text-xl">{title}</h2>
        <div className="loop-wrapper w-full flex flex-col gap-4">
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
