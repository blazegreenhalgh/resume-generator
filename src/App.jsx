import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Archive/Sidebar2";
import Container from "./components/Container";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import EducationSection from "./components/EducationSection";

function App() {
  const [resume, setResume] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
    experience: [
      {
        id: "",
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ],
    educations: [
      {
        id: "",
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
  });

  const updatePersonal = (path, objectKey, value) => {
    setResume((prev) => ({
      ...prev,
      [path]: { ...prev[path], [objectKey]: value },
    }));

    console.log(resume);
  };

  const updateEducation = (path, index, objectKey, value) => {
    setResume((prev) => ({
      ...prev,
      [path]: prev[path].map((item, i) => {
        return i === index ? { ...item, [objectKey]: value } : item;
      }),
    }));
    console.log(resume);
  };

  return (
    <>
      <h1 className="bg-red-500">hello</h1>
      <div className="sidebar flex flex-col gap-2">
        <Container>
          <PersonalDetailsSection
            personal={resume.personal}
            updatePersonal={updatePersonal}
          />
        </Container>
        <Container>
          <EducationSection
            educations={resume.educations}
            updateEducation={updateEducation}
          />
        </Container>
      </div>
    </>
  );
}

export default App;
