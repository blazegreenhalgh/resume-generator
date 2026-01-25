import React from "react";
import BodyEducationSection from "./BodyEducationSection";
import BodyExperienceSection from "./BodyExperienceSection";
import { InboxIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

function Resume({ formatting, resume }) {
  const { accentColor, backgroundColor, layout } = formatting;
  const { personal, experiences, educations } = resume;
  const accentBg = accentColor + "/10 ";

  const layoutClasses = {
    top: {
      resume: "flex flex-col",
      header: "justify-center flex flex-col gap-2",
      body: "p-8",
    },
    left: {
      resume: "grid grid-cols-[1fr_4fr] ",
      header: "h-full justify-start gap-5 pt-15",
      h1: "text-left",
      details: "flex-col",
      body: "mb-auto pt-15 pl-8",
    },
  };

  return (
    <>
      <div className="resume-wrapper flex items-center justify-center">
        <div
          className={`resume ${layoutClasses[layout]["resume"]} aspect-[1/1.414] h-full w-full items-center overflow-clip rounded-xl bg-white drop-shadow-xl`}
        >
          <div
            className={`header ${layoutClasses[layout]["header"]} flex w-full flex-col p-8 text-center text-white ${accentColor}`}
          >
            <h1 className={`text-3xl ${layoutClasses[layout]["h1"]} font-bold`}>
              {personal.fullName}
            </h1>
            <div
              className={`details ${layoutClasses[layout]["details"]} flex justify-center gap-4 text-xs`}
            >
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
          <div
            className={`body ${layoutClasses[layout]["body"]} flex flex-col gap-24 md:max-w-11/12`}
          >
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
