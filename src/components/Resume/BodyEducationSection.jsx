import React from "react";

function BodyEducationSection({ accentColor, group }) {
  return (
    <>
      <div className="group w-full h-auto flex flex-col gap-8">
        {group.map((object) => {
          return (
            <div className="item ">
              <div key={object.id} className="grid grid-cols-[2fr_6fr] gap-12">
                <div className="secondary-info text-black text-sm flex flex-col">
                  <div className="flex gap-1">
                    <p>{object.startDate}</p>
                    <p>-</p>
                    <p>{object.endDate}</p>
                  </div>
                  <p>{object.location}</p>
                </div>
                <div className="primary-info ">
                  <p className="font-semibold text-sm">{object.school}</p>
                  <p className=" text-sm text-gray-500">{object.degree}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BodyEducationSection;
