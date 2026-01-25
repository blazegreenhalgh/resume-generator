import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Archive/Sidebar2";
import Container from "./components/Container";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import RepeatableForm from "./components/RepeatableForm";
import RepeatableSection from "./components/RepeatableSection";
import Resume from "./components/Resume/Resume";

function App() {
  const [resume, setResume] = useState({
    personal: {
      fullName: "Blaze Greenhalgh",
      email: "hello@blazegreenhalgh.com",
      phone: "0411 249 777",
      address: "Perth, AU",
    },
    experiences: [
      {
        id: crypto.randomUUID(),
        company: "SOL STUDIOS",
        position: "Lead Creative Developer",
        startDate: "10/05/2024",
        endDate: "present",
        description:
          "Lead the creative development projects at SOL STUDIOS, interacting with clients, managing developers and quoting projects",
        location: "Remote",
      },
    ],
    educations: [
      {
        id: crypto.randomUUID(),
        school: "North Metro TAFE",
        degree: "Diploma of Graphic Design",
        startDate: "11/04/2020",
        endDate: "15/9/2022",
        location: "Perth, Western Australia",
      },
    ],
  });

  const [formatting, setFormatting] = useState({
    accentColor: "bg-green-950",
    backgroundColor: "bg-gray-900",
  });

  const colors = {
    green: {
      main: "bg-green-950",
      background: "bg-green-950/10",
    },
    red: {
      main: "bg-red-950",
      background: "bg-red-950/10",
    },
    blue: {
      main: "bg-blue-950",
      background: "bg-blue-950/10",
    },
    amber: {
      main: "bg-amber-950",
      background: "bg-amber-950/10",
    },
    purple: {
      main: "bg-purple-950",
      background: "bg-purple-950/10",
    },
  };

  const updatePersonal = (path, objectKey, value) => {
    setResume((prev) => ({
      ...prev,
      [path]: { ...prev[path], [objectKey]: value },
    }));
  };

  const updateRepeatableForm = (path, objectID, objectKey, value) => {
    const newResume = structuredClone(resume);
    const object = newResume[path].find((obj) => objectID === obj.id);

    object[objectKey] = value;
    console.log(resume);
    setResume(newResume);
  };

  const addExperience = (path) => {
    const newResume = structuredClone(resume);

    newResume[path].push({
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      location: "",
    });
    setResume(newResume);
  };

  const addEducation = (path) => {
    const newResume = structuredClone(resume);

    newResume[path].push({
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setResume(newResume);
  };

  const deleteRepeatableForm = (path, objectID) => {
    const newResume = structuredClone(resume);
    const index = newResume[path].findIndex((item) => item.id === objectID);
    newResume[path].splice(index, 1);
    setResume(newResume);
  };

  return (
    <div className="app-wrapper gutter grid h-full w-full max-w-[1500px] grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-[minmax(240px,0.5fr)_1fr]">
      <div className="sidebar-wrapper flex h-full w-full items-start gap-2">
        <div className="sidebar-colours mt-2 flex flex-col gap-1">
          {Object.entries(colors).map(([color, values]) => (
            <button
              key={color}
              data-tooltip={color[0].toUpperCase() + color.slice(1)}
              className={`swatch ${values.main} relative h-10 w-10 cursor-pointer rounded-xl after:pointer-events-none after:absolute after:top-[calc(100%+1px)] after:left-1/2 after:z-10 after:mb-2 after:-translate-x-1/2 after:rounded after:bg-black after:px-2 after:py-1 after:text-xs after:text-white after:opacity-0 after:content-[attr(data-tooltip)] hover:after:opacity-100`}
              onClick={() =>
                setFormatting((prev) => ({
                  ...prev,
                  accentColor: values.main,
                  backgroundColor: values.background,
                }))
              }
            ></button>
          ))}
        </div>
        <div className="sidebar-main flex w-full flex-col gap-6">
          <Container>
            <PersonalDetailsSection
              personal={resume.personal}
              updatePersonal={updatePersonal}
            />
          </Container>
          <Container>
            <RepeatableSection
              title="Experience"
              array={resume.experiences}
              arrayPath="experiences"
              updateRepeatableForm={updateRepeatableForm}
              addRepeatableForm={addExperience}
              deleteRepeatableForm={deleteRepeatableForm}
            />
          </Container>
          <Container>
            <RepeatableSection
              title="Education"
              array={resume.educations}
              arrayPath="educations"
              updateRepeatableForm={updateRepeatableForm}
              addRepeatableForm={addEducation}
              deleteRepeatableForm={deleteRepeatableForm}
            />
          </Container>
        </div>
      </div>
      <div className="resume-wrapper h-full w-full">
        <Resume formatting={formatting} resume={resume} />
      </div>
    </div>
  );
}

export default App;
