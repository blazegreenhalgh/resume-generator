import React from "react";

function FormField({ label = "Label", value, onFieldChange }) {
  return (
    <div className="field flex w-full flex-col gap-1">
      <label className="text-xs font-semibold">{label}</label>
      <input
        type="text"
        className="rounded-xl bg-gray-100 py-2 pl-2 text-sm"
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
