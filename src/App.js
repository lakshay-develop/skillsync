import UserForm from "./Components/UserForm";
import ProfileCard from "./Components/ProfileCard";
import { useState } from 'react';

function App() {
  const [userData,setUserData] = useState({});
  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
       <div style={{ flex: 1 }}>
        <UserForm onFormChange={setUserData} />
      </div>
      <div style={{ flex: 1 }}>
        <h2>Live Preview</h2>
        <ProfileCard user={userData} />
      </div>
    </div>
  );
}

export default App;
