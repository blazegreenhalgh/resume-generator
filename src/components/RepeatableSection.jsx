import React from "react";
import Dropdown from "./Sidebar/Dropdown";

function RepeatableSection({
  title = "title",
  array,
  arrayPath,
  updateRepeatableForm,
}) {
  return (
    <>
      <h2>{title}</h2>
      <div className="loop-wrapper w-full flex flex-col gap-2">
        {array.map((object, index) => (
          <Dropdown
            key={index}
            array={array}
            arrayPath={arrayPath}
            updateRepeatableForm={updateRepeatableForm}
          />
        ))}
      </div>
    </>
  );
}

export default RepeatableSection;
