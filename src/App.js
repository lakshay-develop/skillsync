import { useState, useEffect } from "react";
import UserForm from "./Components/UserForm";
import ProfileCard from "./Components/ProfileCard";

function App() {
  const [isValid, setIsValid] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState(() => {
    let saveData = localStorage.getItem("userData");
    const defaults = {
      name: "",
      email: "",
      city: "",
      bio: "",
      skills: [],
    };
    if (saveData) {
      return { ...defaults, ...JSON.parse(saveData) };
    } else {
      return defaults;
    }
  });

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }
  function handleInputChange(e) {
    let input_name = e.target.name;
    let input_value = e.target.value;
    setUserData((prev) => {
      return {
        ...prev,
        [input_name]: input_value,
      };
    });
  }
  function handleAddSkill(skill) {
    setUserData((prev) => {
      return {
        ...prev,
        skills: [...prev.skills, skill],
      };
    });
  }
  function handleRemoveSkill(index) {
    setUserData((prev) => {
      const updated = [...prev.skills];
      updated.splice(index, 1);
      return {
        ...prev,
        skills: updated,
      };
    });
  }
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
    const allFill = Object.values(userData).every((val) => {
      if (typeof val === "string") {
        return val.trim() !== "";
      }
      if (Array.isArray(val)) {
        return val.length > 0;
      }
      return false;
    });
    setIsValid(allFill);
  }, [userData]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-8">
        <div className="flex justify-between mb-6 max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            AI Portfolio Builder
          </h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-500"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <UserForm
              user={userData}
              handleInputChange={handleInputChange}
              handleAddSkill={handleAddSkill}
              handleRemoveSkill={handleRemoveSkill}
            />
            {!isValid && (
              <p className="text-red-500 mt-4">
                Please fill in all fields to preview your profile.
              </p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
            <ProfileCard user={userData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
