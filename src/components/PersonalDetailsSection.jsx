import React from "react";
import FormField from "./FormField";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function PersonalDetailsSection({ personal, updatePersonal }) {
  return (
    <>
      <UserCircleIcon className="h-7 w-7" />
      <h2 className="text-xl font-bold">Personal Details</h2>
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
