import React from "react";
import FormField from "./FormField";

function RepeatableForm({ array, arrayPath = "", updateRepeatableForm }) {
  return (
    <>
      {array.map((object, index) => (
        <React.Fragment key={index}>
          {Object.keys(object).map((item) => (
            <FormField
              key={item}
              label={item}
              value={object[item]}
              onFieldChange={(e) => {
                updateRepeatableForm(arrayPath, index, item, e.target.value);
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

export default RepeatableForm;
