import React from "react";

function BodyExperienceSection({ accentColor, group }) {
  return (
    <>
      <div className="group flex h-auto w-full flex-col gap-8">
        {group.map((object) => {
          return (
            <div className="item">
              <div key={object.id} className="grid grid-cols-[2fr_6fr] gap-12">
                <div className="secondary-info flex flex-col text-black">
                  <div className="flex gap-1">
                    <p>{object.startDate}</p>
                    <p>-</p>
                    <p>{object.endDate}</p>
                  </div>
                  <p>{object.location}</p>
                </div>
                <div className="primary-info">
                  <p className="font-semibold">{object.company}</p>
                  <p>{object.position}</p>
                  <p className="text-gray-500">{object.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BodyExperienceSection;
