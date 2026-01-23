import React from "react";
import Dropdown from "./Sidebar/Dropdown";
import Button from "./Button";

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
      <Button type="primary" contents={"New " + arrayPath} />
    </>
  );
}

export default RepeatableSection;
