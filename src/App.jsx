import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Archive/Sidebar2";
import Container from "./components/Container";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import RepeatableForm from "./components/RepeatableForm";
import RepeatableSection from "./components/RepeatableSection";

function App() {
  const [resume, setResume] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
    experiences: [],
    educations: [],
  });

  const [format, setFormat] = useState({
    accentColor: "bg-sky-500",
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
      location: "",
      description: "",
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
    <div className="sidebar-wrapper">
      <div className="sidebar flex flex-col gap-2 w-full">
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
    <div className="resume-wrapper"></div>
  );
}

export default App;
