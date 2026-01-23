import React from "react";
import BodyEducationSection from "./BodyEducationSection";
import BodyExperienceSection from "./BodyExperienceSection";

function Resume({ formatting, resume }) {
  const { accentColor, backgroundColor } = formatting;
  const { personal, experiences, educations } = resume;
  const accentBg = accentColor + "/10";

  return (
    <>
      <div className="resume-wrapper flex items-center justify-center px-8 ">
        <div className="resume bg-white rounded-xl h-[29.7cm] w-[21cm] drop-shadow-xl overflow-clip">
          <div
            className={`header flex flex-col justify-center text-white p-8 gap-2 w-full text-center ${accentColor}`}
          >
            <h1 className="text-2xl font-bold">{personal.fullName}</h1>
            <div className="details flex gap-4 justify-center text-xs">
              <div className="detail flex gap-1">
                <p>icon</p>
                <p>{personal.email}</p>
              </div>
              <div className="detail flex gap-1">
                <p>icon</p>
                <p>{personal.phone}</p>
              </div>
              <div className="detail flex gap-1">
                <p>icon</p>
                <p>{personal.address}</p>
              </div>
            </div>
          </div>
          <div className="body p-8 flex flex-col gap-24">
            {educations.length > 0 && (
              <div className="section flex flex-col gap-2">
                <div
                  className={`header w-full flex justify-center ${accentBg}`}
                >
                  <h1 className="font-semibold ">Education</h1>
                </div>
                <BodyEducationSection
                  accentColor={accentColor}
                  group={educations}
                />
              </div>
            )}
            {experiences.length > 0 && (
              <div className="section flex flex-col gap-2">
                <div
                  className={`header w-full flex justify-center ${accentBg}`}
                >
                  <h1 className="font-semibold ">Experience</h1>
                </div>
                <BodyExperienceSection
                  accentColor={accentColor}
                  group={experiences}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
