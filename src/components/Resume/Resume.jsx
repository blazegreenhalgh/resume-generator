import React from "react";
import BodyEducationSection from "./BodyEducationSection";
import BodyExperienceSection from "./BodyExperienceSection";

function Resume({ formatting, resume }) {
  const { accentColor, backgroundColor } = formatting;
  const { personal, experiences, educations } = resume;
  const accentBg = accentColor + "/10";

  return (
    <>
      <div className="resume-wrapper flex items-center justify-center">
        <div className="resume flex aspect-[1/1.414] h-full w-full flex-col items-center overflow-clip rounded-xl bg-white drop-shadow-xl">
          <div
            className={`header flex w-full flex-col justify-center gap-2 p-8 text-center text-white ${accentColor}`}
          >
            <h1 className="text-2xl font-bold">{personal.fullName}</h1>
            <div className="details flex justify-center gap-4 text-xs">
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
          <div className="body flex flex-col gap-24 p-8 md:max-w-11/12">
            {educations.length > 0 && (
              <div className="section flex flex-col gap-2">
                <div
                  className={`header flex w-full justify-center ${accentBg}`}
                >
                  <h1 className="font-semibold">Education</h1>
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
                  className={`header flex w-full justify-center ${accentBg}`}
                >
                  <h1 className="font-semibold">Experience</h1>
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
