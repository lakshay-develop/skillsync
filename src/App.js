import { useState } from 'react';
import UserForm from './Components/UserForm';
import ProfileCard from './Components/ProfileCard';

function App() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    location: '',
    bio: '',
  });

  const [isValid, setIsValid] = useState(false);

  const handleFormChange = (data) => {
    setUserData(data);

    const allFieldsFilled = Object.values(data).every((val) => val.trim() !== '');
    setIsValid(allFieldsFilled);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        AI Portfolio Builder
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow">
          <UserForm onFormChange={handleFormChange} />
          {!isValid && (
            <p className="text-red-500 mt-4">Please fill in all fields to preview your profile.</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
          <ProfileCard user={userData} />
        </div>
      </div>
    </div>
  );
}

export default App;
