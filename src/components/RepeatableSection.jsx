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
        <h2>{title}</h2>
        <div className="loop-wrapper w-full flex flex-col gap-2">
          {array.map((object, index) => {
            const { id, ...filteredArray } = object;

            return (
              <Dropdown
                key={index}
                object={filteredArray}
                arrayPath={arrayPath}
                updateRepeatableForm={updateRepeatableForm}
                deleteRepeatableForm={deleteRepeatableForm}
              />
            );
          })}
        </div>
        <Button
          type="primary"
          contents={"New " + arrayPath}
          onClick={() => addRepeatableForm(arrayPath)}
        />
      </div>
    </>
  );
}

export default RepeatableSection;
