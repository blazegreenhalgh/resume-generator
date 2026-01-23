import React from "react";
import FormField from "./FormField";

function RepeatableForm({ object, arrayPath = "", updateRepeatableForm }) {
  if (!object) return null;
  return (
    <>
      {Object.keys(object).map((item, index) => (
        <FormField
          key={item}
          label={item}
          value={object[item]}
          onFieldChange={(e) => {
            updateRepeatableForm(arrayPath, object["id"], item, e.target.value);
          }}
        />
      ))}
    </>
  );
}

export default RepeatableForm;
