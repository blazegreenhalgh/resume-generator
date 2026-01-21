import React from "react";
import FormField from "./FormField";

function PersonalDetailsSection({ personal, updatePersonal }) {
  return (
    <>
      <h2>Personal Details</h2>
      {Object.keys(personal).map((item) => (
        <FormField
          key={item}
          label={item}
          value={personal[item]}
          onFieldChange={(e) => {
            updatePersonal("personal", item, e.target.value);
          }}
        />
      ))}
    </>
  );
}

export default PersonalDetailsSection;
