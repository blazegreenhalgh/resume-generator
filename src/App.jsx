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
      <div className="sidebar-wrapper flex h-full w-full items-start">
        <div className="sidebar flex w-full flex-col gap-6">
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
