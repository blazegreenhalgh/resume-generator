import React from "react";
import BodyEducationSection from "./BodyEducationSection";
import BodyExperienceSection from "./BodyExperienceSection";
import { InboxIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Resume({ formatting, resume }) {
  const { accentColor, backgroundColor } = formatting;
  const { personal, experiences, educations } = resume;
  const accentBg = accentColor + "/10 ";

  return (
    <>
      <div className="resume-wrapper flex items-center justify-center">
        <div className="resume flex aspect-[1/1.414] h-full w-full flex-col items-center overflow-clip rounded-xl bg-white drop-shadow-xl">
          <div
            className={`header flex w-full flex-col justify-center gap-2 p-8 text-center text-white ${accentColor}`}
          >
            <h1 className="text-3xl font-bold">{personal.fullName}</h1>
            <div className="details flex justify-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1">
                <InboxIcon className="h-[1.2em] w-[1.2em]" />
                <span>{personal.email}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <PhoneIcon className="h-[1.1em] w-[1.1em]" />
                <span>{personal.phone}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPinIcon className="h-[1.1em] w-[1.1em]" />
                <span>{personal.address}</span>
              </span>
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
