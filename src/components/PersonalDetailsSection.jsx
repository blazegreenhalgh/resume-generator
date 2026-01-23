import React from "react";
import FormField from "./FormField";

function PersonalDetailsSection({ personal, updatePersonal }) {
  return (
    <>
      <h2 className="font-bold text-xl">Personal Details</h2>
      {Object.keys(personal).map((item) => {
        const label = item[0].toUpperCase() + item.slice(1);
        return (
          <FormField
            key={item}
            label={label}
            value={personal[item]}
            onFieldChange={(e) => {
              updatePersonal("personal", item, e.target.value);
            }}
          />
        );
      })}
    </>
  );
}

export default PersonalDetailsSection;
