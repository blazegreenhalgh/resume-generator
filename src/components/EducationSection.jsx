import React from "react";
import FormField from "./FormField";

function EducationSection({ educations, updateEducation }) {
  return (
    <>
      <h2>Education</h2>

      {educations.map((education, index) => (
        <React.Fragment key={index}>
          {Object.keys(education).map((item) => (
            <FormField
              key={item}
              label={item}
              value={education[item]}
              onFieldChange={(e) => {
                updateEducation("educations", index, item, e.target.value);
              }}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

export default EducationSection;
