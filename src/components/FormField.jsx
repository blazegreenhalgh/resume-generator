import React from "react";

function FormField({ label = "Label", value, onFieldChange }) {
  return (
    <div className="field flex flex-col gap-1 w-full">
      <label className="text-xs">{label}</label>
      <input
        type="text"
        className="bg-gray-100 rounded-sm pl-2 py-2"
        value={value} // resume.personal.(item)
        onChange={(e) => onFieldChange(e)}
      />
    </div>
  );
}

export default FormField;

// Form field
// Needs:
// * Value
// * on Change function (update state)
// * Label
//
