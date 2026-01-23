import React from "react";
import Dropdown from "./Sidebar/Dropdown";
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
      <h2>{title}</h2>
      <div className="loop-wrapper w-full flex flex-col gap-2">
        {array.map((object, index) => (
          <Dropdown
            key={index}
            object={object}
            arrayPath={arrayPath}
            updateRepeatableForm={updateRepeatableForm}
            deleteRepeatableForm={deleteRepeatableForm}
          />
        ))}
      </div>
      <Button
        type="primary"
        contents={"New " + arrayPath}
        onClick={() => addRepeatableForm(arrayPath)}
      />
      <Button
        type="neutral"
        contents={"Log Resume to Console"}
        onClick={() => console.log(array)}
      />
    </>
  );
}

export default RepeatableSection;
