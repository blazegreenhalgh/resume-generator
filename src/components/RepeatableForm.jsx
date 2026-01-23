import React from "react";
import FormField from "./FormField";

function RepeatableForm({ object, arrayPath = "", updateRepeatableForm }) {
  if (!object) return null;
  return (
    <>
      {Object.keys(object).map((item, index) => {
        const label = item[0].toUpperCase() + item.slice(1);

        return (
          <FormField
            key={item}
            label={label}
            value={object[item]}
            onFieldChange={(e) => {
              updateRepeatableForm(
                arrayPath,
                object["id"],
                item,
                e.target.value,
              );
            }}
          />
        );
      })}
    </>
  );
}

export default RepeatableForm;
